# R2 Image Migration — Status & Verification Plan

**Date:** 2026-09-25
**Branch:** `move-assets`
**Owner:** Abdul Hadi
**Next step:** Verify on Monday (2026-09-28)

## What this is

Migration of images used by `evolve-strength-client` from local files (`public/`, `src/assets/`) to Cloudflare R2 (bucket `website-assets`, served via `https://assets.evolvestrength.ca`), so the app loads images from R2 instead of bundling them.

## Scope completed in this phase

Only images that are **actively referenced in code as plain string literals** were migrated — nothing else:

| Category | Count | Status |
|---|---|---|
| `public/assets` (referenced paths) | 701 | ✅ Uploaded to R2 + code rewritten |
| `public/media` (referenced paths) | 80 | ✅ Uploaded to R2 + code rewritten |
| `public/images/logo.svg` | 1 | ✅ Already on R2, code rewritten |
| **Total migrated this phase** | **782** | ✅ Done |

**Explicitly out of scope (not touched):** the 234 images imported via `import x from "../assets/..."` in `src/assets` (JS/JSX imports). These need a different approach (import → const codemod, with special handling for SVGs used as React components via `@svgr/rollup`). Separate plan needed for these later.

## What was actually done

1. **Upload to R2** — Used `rclone` (configured with an R2 remote `r2remote`) to copy only the referenced files, preserving the exact same relative path as a key (e.g. `public/assets/images/AboutUs/x.webp` → R2 key `assets/images/AboutUs/x.webp`). Most files (1,310 of ~1,444) were already on R2 from an earlier, unrelated bulk migration — only 87 files were actually missing/outdated and needed uploading.
2. **Code rewrite** — Added `src/lib/assetUrl.js` helper (`assetUrl(path) => \`${VITE_ASSETS_BASE_URL}${path}\``) and `VITE_ASSETS_BASE_URL=https://assets.evolvestrength.ca` in `.env`. Rewrote 745 string-literal references across 92 files (plus CSS `url()` references in `src/assets/styles/styles.css`, hardcoded since CSS can't call JS functions) to use this helper instead of bare local paths.
3. **Bug found & fixed — wrong Content-Type on R2 (pre-existing, not caused by this work):** Files from the *original* bulk migration (done before this session, by someone else) were stored on R2 with incorrect `Content-Type` headers (`application/json` / `application/octet-stream` instead of `image/webp`, `image/png`, etc.). File content itself was always correct — only the served header was wrong, which made browsers refuse to render the images (broken image icons), even though the URLs returned HTTP 200. Fixed by force re-uploading all 782 in-scope files via `rclone --ignore-times`, which lets rclone auto-detect and set the correct MIME type. Verified 701/701 + 80/80 + logo now serve correct `Content-Type`.

## Verification done so far

- `npm run build` — clean, no errors.
- `npm run lint` — 172 problems, identical to the pre-migration baseline (no new issues introduced).
- Spot-checked ~15+ random URLs via `curl -sI` — all return HTTP 200 with correct `Content-Type`.
- Bulk-verified all 701 `public/assets` URLs' `Content-Type` via script — 0 bad remaining after fixes.

## What to verify on Monday (2026-09-28)

1. **Visual check in browser** — open the live/preview site, hard-refresh (Ctrl+Shift+R), and click through pages that use the migrated folders: Home (facility carousel — "Post/Brentwood/Seton/Royal Oak/Downtown/North/South Commons" tabs), About Us, Discover, Join As Trainer, Presale (South Common & Park Royal), Locations, Membership Benefits, Corporate Membership, Spaces, Wellness, Franchise, Gym. Confirm no broken image icons anywhere.
2. **Network tab check** — open DevTools → Network → filter by "Img", reload each page, confirm all image requests go to `assets.evolvestrength.ca` (for migrated paths) and return 200, not 404.
3. **Mobile view** — repeat the same spot-check in responsive/mobile view since many images have separate `*Mob.webp` variants.
4. **Rollback readiness** — if anything looks broken, set `VITE_ASSETS_BASE_URL=` (empty) in `.env` and rebuild — this instantly reverts every migrated image back to local files with zero code changes needed.
5. **Decide next phase** — once confirmed stable, decide whether/when to tackle the remaining 234 `src/assets` import-based images (separate, riskier migration — not started).

## Rollback

Nothing was deleted. All local files remain in `public/` and `src/assets/` exactly as before. To fully revert: clear `VITE_ASSETS_BASE_URL` in `.env` and rebuild, or `git revert`/`git reset` the commits on the `move-assets` branch.

## Files changed

- `.env` — added `VITE_ASSETS_BASE_URL`, `R2_ACCOUNT_ID`, `R2_ACCESS_KEY_ID`, `R2_SECRET_ACCESS_KEY`, `R2_BUCKET` (gitignored, not committed)
- `src/lib/assetUrl.js` — new helper (only new code file)
- `src/assets/styles/styles.css` — CSS `url()` references updated to absolute R2 URLs
- 91 other component/constants files — string literal path rewrites to use `assetUrl()`

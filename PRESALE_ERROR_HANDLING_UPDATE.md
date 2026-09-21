# Presale (Park Royal) Payment Flow — Error Handling Update

Ye update Join Now flow (`src/features/joinNow/pages/PaymentInfo.jsx`) jaisi error
handling ko Presale Park Royal payment flow (`src/pages/FounderOfferPayment/`)
mein bhi implement karta hai.

## Files Changed

1. `src/pages/FounderOfferPayment/index.jsx`
2. `src/components/FounderOfferPayment/steps/PaymentInformation.jsx`

---

## 1. `src/pages/FounderOfferPayment/index.jsx`

### Naye constants aur helper functions add kiye (module level)

- `BROWSER_ID_KEY = "paymentBrowserId"`
- `KNOWN_IPS_KEY = "knownPaymentIps"`
- `BLOCKED_KEY = "paymentBlocked"`
- `COOLDOWN_UNTIL_KEY = "paymentCooldownUntil"`

  > Ye exact wahi `localStorage` keys hain jo Join Now flow use karta hai, taake
  > agar ek device kisi ek flow (Join Now ya Presale) pe block/rate-limited ho
  > jaye, to dusre flow pe bhi wo state carry ho.

- `ensureBrowserId()` — device ke liye ek persistent random ID generate/store
  karta hai (`crypto.randomUUID()`, fallback timestamp-based ID).
- `getStoredBoolean(key)` — `localStorage` se boolean flag parhta hai.
- `getStoredCooldownUntil()` — saved cooldown timestamp parhta hai.
- `formatDuration(seconds)` — seconds ko "X seconds" / "X minutes" mein format
  karta hai UI message ke liye.

### Naya component state add kiya

```js
const [browserId, setBrowserId] = useState("");
const [isBlocked, setIsBlocked] = useState(false);
const [cooldownUntil, setCooldownUntil] = useState(null);
const [cooldownSecondsLeft, setCooldownSecondsLeft] = useState(0);
```

- Ek `useEffect` mount pe browser ID generate/load karta hai, aur pehle se
  saved `isBlocked` / `cooldownUntil` state ko `localStorage` se restore karta
  hai (page refresh pe bhi bypass nahi hota).
- Doosra `useEffect` har second `cooldownSecondsLeft` ko live update karta hai
  (countdown timer), aur cooldown khatam hone pe khud clear ho jata hai.

### Naye helper functions add kiye

- `setBlockedState(blocked)` — state + `localStorage` dono update karta hai.
- `setCooldownState(retryAfterSeconds)` — cooldown ka end-timestamp calculate
  karke state + `localStorage` mein save karta hai.
- `updateKnownIps(ips)` — backend se aayi `knownIps` list ko save karta hai
  (Join Now flow jaisa).

### `makePayment()` mein changes

- Ab request ke sath `x-browser-id` header bheja jata hai (pehle nahi bheja
  ja raha tha).
- `response.status === 403` ya `res.blocked === true` par ab function
  `{ success: false, blocked: true, apiMessage }` return karta hai (pehle
  generic error treat hota tha).
- `response.status === 429` par ab function
  `{ success: false, retryAfterSeconds, apiMessage }` return karta hai (naya
  case, pehle bilkul handle nahi hota tha).
- Network/fetch error (`catch` block) par ab user ko generic
  `"Payment failed. Please try again."` dikhaya jata hai, raw
  `error.message` (jaise "Failed to fetch") ab seedha UI pe expose nahi hota.

### `handlePaymentSubmit()` mein changes

- Submit se pehle 2 naye guard-checks add kiye:
  - Agar `isBlocked` hai, to seedha error dikha kar rok deta hai.
  - Agar `cooldownSecondsLeft > 0` hai, to "Please wait X seconds/minutes"
    dikha kar rok deta hai.
- `makePayment()` ka result handle karne wale hisse mein naye branches add
  kiye:
  - `paymentResult.blocked` → `setBlockedState(true)` + error message.
  - `paymentResult.retryAfterSeconds !== undefined` → `setCooldownState(...)`
    + countdown message.
- Successful payment ke baad `setBlockedState(false)` aur
  `setCooldownState(null)` call kiya jata hai (purana flag clear ho jaye).

### `PaymentInformation` ko naye props pass kiye

```jsx
<PaymentInformation
  ...
  isBlocked={isBlocked}
  cooldownSecondsLeft={cooldownSecondsLeft}
/>
```

---

## 2. `src/components/FounderOfferPayment/steps/PaymentInformation.jsx`

- `isBlocked` aur `cooldownSecondsLeft` props accept kiye (default `false` /
  `0`).
- `formatDuration(seconds)` helper add kiya (UI message ke liye, standalone
  copy is file ke andar).
- Submit button ka `disabled` condition update kiya — ab `isBlocked` ya
  `cooldownSecondsLeft > 0` hone par bhi button disable ho jata hai:

```js
disabled={
  isSubmitting ||
  !turnstileSiteKey ||
  isBlocked ||
  cooldownSecondsLeft > 0
}
```

- Error message area update kiya — ab 3 alag messages priority ke sath dikhte
  hain:
  1. Blocked → "Payment submissions are blocked for this device or network."
  2. Cooldown active → "Please wait X seconds/minutes before trying again."
  3. Warna normal `submitError` (jo backend se aaya generic error hai).

---

## Kya Touch Nahi Kiya

- `ALLOW_CREATE_PERSON_FAILURE = true` (index.jsx) — ye alag issue hai jo
  pehle analyse mein flag hua tha (agar `createPerson` backend call fail ho
  to bhi success treat ho jata hai). Isko jaan-boojh kar chhoda gaya hai jab
  tak client/user explicitly confirm na kare ke isay bhi badalna hai.

## Status

- Sirf local files mein change hai — koi commit/push/deploy nahi kiya gaya
  (standing instruction ke mutabiq).
- Dono files `esbuild` se syntax-check ho chuki hain, koi error nahi.

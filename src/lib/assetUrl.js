const ASSETS_BASE_URL = import.meta.env.VITE_ASSETS_BASE_URL ?? "";

export const assetUrl = (path) => `${ASSETS_BASE_URL}${path}`;

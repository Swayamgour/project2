export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.jjcsystems.com").replace(/\/+$/, "");
export const API_URL = (process.env.NEXT_PUBLIC_API_URL || "https://admin.jjcsystems.com/api").replace(/\/+$/, "");
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.jpg`;
export const SITE_NAME = "JJC Systems";

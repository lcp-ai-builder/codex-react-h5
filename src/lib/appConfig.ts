const fallbackMax = import.meta.env.PROD ? 200 : 150
const rawMax = import.meta.env.VITE_MAX_LEVERAGE_PERCENT
const parsedMax = rawMax ? Number(rawMax) : fallbackMax

export const MAX_LEVERAGE_PERCENT = Number.isFinite(parsedMax) ? parsedMax : fallbackMax

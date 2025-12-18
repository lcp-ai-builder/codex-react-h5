const DESIGN_WIDTH = 375
const BASE_FONT_SIZE = 16
const MIN_FONT_SIZE = 12
const MAX_FONT_SIZE = 20

function computeRem(viewportWidth: number) {
  const next = (viewportWidth / DESIGN_WIDTH) * BASE_FONT_SIZE
  return Math.max(MIN_FONT_SIZE, Math.min(MAX_FONT_SIZE, next))
}

export function setupRem() {
  const apply = () => {
    const viewportWidth = document.documentElement.clientWidth || window.innerWidth
    const rem = computeRem(viewportWidth)
    document.documentElement.style.fontSize = `${rem}px`
  }

  apply()

  window.addEventListener('resize', apply, { passive: true })
  window.addEventListener('orientationchange', apply, { passive: true })
}

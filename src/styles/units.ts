const DESIGN_WIDTH = 375

export function vw(px: number, designWidth = DESIGN_WIDTH) {
  return `calc(${px} * 100vw / ${designWidth})`
}


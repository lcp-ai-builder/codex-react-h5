import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type UiColorMode = 'light' | 'dark'

type UiState = {
  colorMode: UiColorMode
  setColorMode: (mode: UiColorMode) => void
  toggleColorMode: () => void
}

function writeChakraColorModeToStorage(mode: UiColorMode) {
  try {
    window.localStorage.setItem('chakra-ui-color-mode', mode)
    window.localStorage.setItem('chakra-ui-color-mode-explicit', 'true')
  } catch {
    // ignore
  }
}

export const useUiStore = create<UiState>()(
  persist(
    (set, get) => ({
      colorMode: 'light',
      setColorMode: (mode) => {
        writeChakraColorModeToStorage(mode)
        set({ colorMode: mode })
      },
      toggleColorMode: () => {
        const next: UiColorMode = get().colorMode === 'dark' ? 'light' : 'dark'
        writeChakraColorModeToStorage(next)
        set({ colorMode: next })
      }
    }),
    {
      name: 'ui-store',
      partialize: (s) => ({ colorMode: s.colorMode }),
      onRehydrateStorage: () => (state) => {
        if (!state) return
        writeChakraColorModeToStorage(state.colorMode)
      }
    }
  )
)


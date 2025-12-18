import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import type { Locale } from '@/i18n/messages'

export type UiColorMode = 'light' | 'dark'

type UiState = {
  colorMode: UiColorMode
  locale: Locale
  setColorMode: (mode: UiColorMode) => void
  toggleColorMode: () => void
  setLocale: (locale: Locale) => void
}

function writeChakraColorModeToStorage(mode: UiColorMode) {
  try {
    window.localStorage.setItem('chakra-ui-color-mode', mode)
    window.localStorage.setItem('chakra-ui-color-mode-explicit', 'true')
  } catch {
    // ignore
  }
}

function getDefaultLocale(): Locale {
  const lang = (navigator.language || '').toLowerCase()
  return lang.startsWith('zh') ? 'zh-CN' : 'en'
}

export const useUiStore = create<UiState>()(
  persist(
    (set, get) => ({
      colorMode: 'light',
      locale: getDefaultLocale(),
      setColorMode: (mode) => {
        writeChakraColorModeToStorage(mode)
        set({ colorMode: mode })
      },
      toggleColorMode: () => {
        const next: UiColorMode = get().colorMode === 'dark' ? 'light' : 'dark'
        writeChakraColorModeToStorage(next)
        set({ colorMode: next })
      },
      setLocale: (locale) => set({ locale })
    }),
    {
      name: 'ui-store',
      partialize: (s) => ({ colorMode: s.colorMode, locale: s.locale }),
      onRehydrateStorage: () => (state) => {
        if (!state) return
        writeChakraColorModeToStorage(state.colorMode)
      }
    }
  )
)

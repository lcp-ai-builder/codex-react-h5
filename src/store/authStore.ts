import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type User = {
  id: string
  name: string
  avatarUrl?: string
}

type AuthState = {
  user: User | null
  login: (name: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      login: (name) =>
        set({
          user: {
            id:
              globalThis.crypto?.randomUUID?.() ??
              `${Date.now()}-${Math.random().toString(16).slice(2)}`,
            name: name.trim()
          }
        }),
      logout: () => set({ user: null })
    }),
    {
      name: 'auth-store',
      partialize: (s) => ({ user: s.user })
    }
  )
)

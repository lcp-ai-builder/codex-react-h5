import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { getItems, type Item } from '@/lib/mockApi'

type ItemsState = {
  items: Item[]
  lastUpdatedAt: number | null
  refresh: () => Promise<void>
  getById: (id: number) => Item | undefined
}

export const useItemsStore = create<ItemsState>()(
  devtools((set, get) => ({
    items: [],
    lastUpdatedAt: null,
    refresh: async () => {
      const items = await getItems()
      set({ items, lastUpdatedAt: Date.now() }, false, 'items/refresh')
    },
    getById: (id) => get().items.find((it) => it.id === id)
  }))
)


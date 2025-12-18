export type Item = {
  id: number
  title: string
  description: string
}

const MOCK_ITEMS: Item[] = [
  { id: 1, title: 'Item One', description: 'Example detail content for item #1.' },
  { id: 2, title: 'Item Two', description: 'Example detail content for item #2.' },
  { id: 3, title: 'Item Three', description: 'Example detail content for item #3.' }
]

export async function getItems(): Promise<Item[]> {
  await new Promise((r) => setTimeout(r, 250))
  return MOCK_ITEMS
}


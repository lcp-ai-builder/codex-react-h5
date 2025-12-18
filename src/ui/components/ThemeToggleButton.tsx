import { Button, useColorMode } from '@chakra-ui/react'

export function ThemeToggleButton() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Button
      aria-label="Toggle color mode"
      onClick={toggleColorMode}
      variant="outline"
      size="sm"
    >
      {colorMode === 'light' ? 'Dark' : 'Light'}
    </Button>
  )
}

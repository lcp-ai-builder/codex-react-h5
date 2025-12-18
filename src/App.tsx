import { ChakraProvider, useColorMode } from '@chakra-ui/react'
import { RouterProvider } from 'react-router-dom'
import { useEffect } from 'react'
import { router } from '@/router'
import { theme } from '@/theme'
import { useUiStore } from '@/store/uiStore'

function ColorModeSync() {
  const storeColorMode = useUiStore((s) => s.colorMode)
  const { colorMode, setColorMode } = useColorMode()

  useEffect(() => {
    if (storeColorMode !== colorMode) setColorMode(storeColorMode)
  }, [colorMode, setColorMode, storeColorMode])

  return null
}

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSync />
      <RouterProvider router={router} />
    </ChakraProvider>
  )
}

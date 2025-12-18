import { Box, Center, Text, useColorModeValue } from '@chakra-ui/react'
import { useEffect, useMemo, useState, type ReactNode } from 'react'

type Props = {
  children: ReactNode
}

function isLandscape() {
  return window.matchMedia?.('(orientation: landscape)')?.matches ?? window.innerWidth > window.innerHeight
}

export function PortraitOnlyGuard({ children }: Props) {
  const [landscape, setLandscape] = useState(false)

  const message = useMemo(() => 'Please rotate back to portrait mode.', [])
  const subtleText = useColorModeValue('gray.600', 'gray.400')

  useEffect(() => {
    const apply = () => setLandscape(isLandscape())
    apply()
    window.addEventListener('resize', apply, { passive: true })
    window.addEventListener('orientationchange', apply, { passive: true })
    return () => {
      window.removeEventListener('resize', apply)
      window.removeEventListener('orientationchange', apply)
    }
  }, [])

  if (!landscape) return <>{children}</>

  return (
    <Center minH="100vh" px="6">
      <Box textAlign="center">
        <Text fontSize="lg" fontWeight="semibold">
          Portrait Only
        </Text>
        <Text mt="2" color={subtleText}>
          {message}
        </Text>
      </Box>
    </Center>
  )
}

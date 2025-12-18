import { Box, Button, Heading, HStack, Text, VStack, useColorModeValue } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { vw } from '@/styles/units'
import { ThemeToggleButton } from '@/ui/components/ThemeToggleButton'

export function HomePage() {
  const subtleText = useColorModeValue('gray.600', 'gray.400')

  return (
    <VStack align="stretch" spacing="6">
      <HStack justify="space-between">
        <Heading size="md">H5 Scaffold</Heading>
        <ThemeToggleButton />
      </HStack>

      <Box>
        <Text color={subtleText}>
          Vite + React + TypeScript + Router + Zustand + Chakra UI
        </Text>
        <Text mt="2" color={subtleText}>
          Safe-area enabled (iPhone X+), responsive rem scaling, portrait-only UX guard.
        </Text>
      </Box>

      <VStack align="stretch" spacing="3">
        <Button as={RouterLink} to="/list" colorScheme="teal">
          Go to List
        </Button>
        <Button as={RouterLink} to="/detail/1" variant="outline" height={vw(48)}>
          Open Detail #1
        </Button>
      </VStack>
    </VStack>
  )
}

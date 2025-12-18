import { Box, Container } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import { PortraitOnlyGuard } from '@/ui/components/PortraitOnlyGuard'
import { SafeArea } from '@/ui/components/SafeArea'

export function AppLayout() {
  return (
    <PortraitOnlyGuard>
      <SafeArea>
        <Box minH="100vh">
          <Container maxW="md" px="4" py="4">
            <Outlet />
          </Container>
        </Box>
      </SafeArea>
    </PortraitOnlyGuard>
  )
}


import { Box, Container } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import { PortraitOnlyGuard } from '@/ui/components/PortraitOnlyGuard'
import { SafeArea } from '@/ui/components/SafeArea'
import { BottomNav } from '@/ui/components/BottomNav'

export function AppLayout() {
  return (
    <PortraitOnlyGuard>
      <SafeArea sx={{ paddingBottom: 0 }}>
        <Box minH="calc(100dvh - var(--safe-top))">
          <Container
            maxW="md"
            px="4"
            py="4"
            minH="calc(100dvh - var(--safe-top))"
            pb="calc(var(--bottom-nav-height) + var(--safe-bottom))"
          >
            <Outlet />
          </Container>
          <BottomNav />
        </Box>
      </SafeArea>
    </PortraitOnlyGuard>
  )
}

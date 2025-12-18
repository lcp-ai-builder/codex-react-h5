import { Box, Container } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import { PortraitOnlyGuard } from '@/ui/components/PortraitOnlyGuard'
import { SafeArea } from '@/ui/components/SafeArea'
import { BottomNav } from '@/ui/components/BottomNav'
import { AppHeader } from '@/ui/components/AppHeader'

export function AppLayout() {
  return (
    <PortraitOnlyGuard>
      <SafeArea sx={{ paddingTop: 0, paddingBottom: 0 }}>
        <Box minH="100dvh">
          <AppHeader />
          <Container
            maxW="md"
            px="4"
            pt="calc(var(--app-header-height) + var(--safe-top) + 16px)"
            pb="calc(var(--bottom-nav-height) + var(--safe-bottom) + 16px)"
          >
            <Outlet />
          </Container>
          <BottomNav />
        </Box>
      </SafeArea>
    </PortraitOnlyGuard>
  )
}

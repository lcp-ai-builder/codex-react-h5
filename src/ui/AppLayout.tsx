import { Box, Container } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import { PortraitOnlyGuard } from '@/ui/components/PortraitOnlyGuard'
import { SafeArea } from '@/ui/components/SafeArea'
import { BottomNav } from '@/ui/components/BottomNav'

export function AppLayout() {
  return (
    <PortraitOnlyGuard>
      <SafeArea>
        <Box minH="100vh">
          <Container
            maxW="md"
            px="4"
            py="4"
            display="flex"
            flexDirection="column"
            minH="100vh"
          >
            <Box flex="1">
              <Outlet />
            </Box>
            <BottomNav />
          </Container>
        </Box>
      </SafeArea>
    </PortraitOnlyGuard>
  )
}

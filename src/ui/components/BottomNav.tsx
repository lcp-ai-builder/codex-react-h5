import { Box, Button, Container, HStack, useColorModeValue } from '@chakra-ui/react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { useI18n } from '@/i18n/useI18n'

type NavItem = {
  labelKey: 'nav.my' | 'nav.trade' | 'nav.messages' | 'nav.settings'
  to: string
}

const navItems: NavItem[] = [
  { labelKey: 'nav.my', to: '/my' },
  { labelKey: 'nav.trade', to: '/trade' },
  { labelKey: 'nav.messages', to: '/messages' },
  { labelKey: 'nav.settings', to: '/settings' }
]

export function BottomNav() {
  const location = useLocation()
  const navBg = useColorModeValue('gray.50', 'gray.800')
  const navBorder = useColorModeValue('gray.200', 'gray.700')
  const activeColor = useColorModeValue('teal.800', 'teal.200')
  const inactiveColor = useColorModeValue('gray.500', 'gray.400')
  const { t } = useI18n()

  return (
    <Box
      bg={navBg}
      borderTop="1px solid"
      borderColor={navBorder}
      position="fixed"
      left="0"
      right="0"
      bottom="0"
      zIndex="1000"
      height="calc(var(--bottom-nav-height) + var(--safe-bottom))"
      paddingBottom="var(--safe-bottom)"
    >
      <Container maxW="md" px="4" height="var(--bottom-nav-height)" display="flex">
        <HStack
          spacing="0.5"
          width="full"
          divider={<Box borderLeft="1px solid" borderColor={navBorder} height="20px" />}
        >
          {navItems.map((item) => {
            const isActive =
              location.pathname === item.to || location.pathname.startsWith(`${item.to}/`)

            return (
              <Button
                key={item.to}
                as={RouterLink}
                to={item.to}
                variant="ghost"
                flex="1"
                display="flex"
                alignItems="center"
                justifyContent="center"
                minH="44px"
                fontSize="sm"
                fontWeight={isActive ? 'semibold' : 'medium'}
                color={isActive ? activeColor : inactiveColor}
                bg="transparent"
                _hover={{ bg: 'transparent' }}
                _active={{ bg: 'transparent' }}
                _focusVisible={{ bg: 'transparent', boxShadow: 'none' }}
                sx={{ WebkitTapHighlightColor: 'transparent' }}
              >
              {t(item.labelKey)}
            </Button>
          )
          })}
        </HStack>
      </Container>
    </Box>
  )
}

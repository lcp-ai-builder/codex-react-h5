import { Box, Button, HStack, useColorModeValue } from '@chakra-ui/react'
import { Link as RouterLink, useLocation } from 'react-router-dom'

type NavItem = {
  label: string
  to: string
}

const navItems: NavItem[] = [
  { label: '我的', to: '/my' },
  { label: '交易', to: '/trade' },
  { label: '消息', to: '/messages' },
  { label: '设置', to: '/settings' }
]

export function BottomNav() {
  const location = useLocation()
  const navBg = useColorModeValue('gray.50', 'gray.800')
  const navBorder = useColorModeValue('gray.200', 'gray.700')
  const activeColor = useColorModeValue('teal.600', 'teal.200')

  return (
    <Box
      bg={navBg}
      borderTop="1px solid"
      borderColor={navBorder}
      borderRadius="md"
      px="1.5"
      py="1"
      mt="4"
    >
      <HStack spacing="0.5">
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
              minH="38px"
              fontSize="sm"
              fontWeight="medium"
              color={isActive ? activeColor : undefined}
            >
              {item.label}
            </Button>
          )
        })}
      </HStack>
    </Box>
  )
}

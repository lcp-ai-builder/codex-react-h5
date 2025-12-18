import {
  Avatar,
  Box,
  Container,
  HStack,
  Icon,
  IconButton,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useMemo } from 'react'
import { useAuthStore } from '@/store/authStore'
import { useI18n } from '@/i18n/useI18n'
import type { MessageKey } from '@/i18n/messages'

function BackIcon() {
  return (
    <Icon viewBox="0 0 24 24" width="20px" height="20px">
      <path
        fill="currentColor"
        d="M15.5 19a1 1 0 0 1-.7-.29l-6-6a1 1 0 0 1 0-1.42l6-6a1 1 0 1 1 1.4 1.42L10.91 12l5.29 5.29A1 1 0 0 1 15.5 19Z"
      />
    </Icon>
  )
}

function titleKeyFromPathname(pathname: string): MessageKey {
  const seg = pathname.split('/').filter(Boolean)[0] ?? ''
  switch (seg) {
    case 'my':
      return 'title.my'
    case 'trade':
      return 'title.trade'
    case 'messages':
      return 'title.messages'
    case 'settings':
      return 'title.settings'
    case 'login':
      return 'title.login'
    case 'register':
      return 'title.register'
    case 'profile':
      return 'title.profile'
    default:
      return 'title.my'
  }
}

export function AppHeader() {
  const bg = useColorModeValue('white', 'gray.900')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  const navigate = useNavigate()
  const location = useLocation()
  const { t } = useI18n()
  const user = useAuthStore((s) => s.user)

  const pathnameSeg = useMemo(
    () => location.pathname.split('/').filter(Boolean)[0] ?? '',
    [location.pathname]
  )
  const titleKey = useMemo(() => titleKeyFromPathname(location.pathname), [location.pathname])
  const showBack = pathnameSeg === 'login' || pathnameSeg === 'register' || pathnameSeg === 'profile'

  return (
    <Box
      bg={bg}
      borderBottom="1px solid"
      borderColor={borderColor}
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1100"
      height="calc(var(--app-header-height) + var(--safe-top))"
      paddingTop="var(--safe-top)"
      sx={{ WebkitTapHighlightColor: 'transparent' }}
    >
      <Container maxW="md" px="4" height="var(--app-header-height)">
        <HStack height="full" justifyContent="space-between">
          {showBack ? (
            <IconButton
              aria-label={t('header.back')}
              variant="ghost"
              size="sm"
              icon={<BackIcon />}
              onClick={() => {
                if (window.history.length > 1) navigate(-1)
                else navigate('/my', { replace: true })
              }}
            />
          ) : (
            <Box width="36px" />
          )}
          <Text fontWeight="semibold">{t(titleKey)}</Text>
          <IconButton
            aria-label={t('header.avatar')}
            variant="ghost"
            size="sm"
            onClick={() => navigate(user ? '/profile' : '/login')}
            icon={<Avatar size="sm" name={user?.name} src={user?.avatarUrl} />}
          />
        </HStack>
      </Container>
    </Box>
  )
}

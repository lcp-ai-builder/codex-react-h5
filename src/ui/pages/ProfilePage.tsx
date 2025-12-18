import { Avatar, Button, Heading, HStack, Text, VStack, useColorModeValue } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/store/authStore'
import { useI18n } from '@/i18n/useI18n'

export function ProfilePage() {
  const subtleText = useColorModeValue('gray.600', 'gray.400')
  const { t } = useI18n()
  const navigate = useNavigate()

  const user = useAuthStore((s) => s.user)
  const logout = useAuthStore((s) => s.logout)

  if (!user) {
    return (
      <VStack align="stretch" spacing="4">
        <Heading size="md">{t('title.profile')}</Heading>
        <Text color={subtleText}>{t('profile.notLoggedIn')}</Text>
        <Button onClick={() => navigate('/login', { replace: true })} colorScheme="teal">
          {t('profile.goLogin')}
        </Button>
      </VStack>
    )
  }

  return (
    <VStack align="stretch" spacing="4">
      <Heading size="md">{t('title.profile')}</Heading>
      <HStack spacing="3">
        <Avatar size="md" name={user.name} src={user.avatarUrl} />
        <VStack align="start" spacing="0.5">
          <Text fontWeight="semibold">{user.name}</Text>
          <Text fontSize="sm" color={subtleText}>
            ID: {user.id}
          </Text>
        </VStack>
      </HStack>
      <Button
        variant="outline"
        onClick={() => {
          logout()
          navigate('/login', { replace: true })
        }}
      >
        {t('profile.logout')}
      </Button>
    </VStack>
  )
}


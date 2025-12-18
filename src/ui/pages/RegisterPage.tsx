import { Button, Heading, Input, VStack } from '@chakra-ui/react'
import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/store/authStore'
import { useI18n } from '@/i18n/useI18n'

export function RegisterPage() {
  const { t } = useI18n()
  const navigate = useNavigate()

  const login = useAuthStore((s) => s.login)
  const [name, setName] = useState('')
  const isValid = useMemo(() => name.trim().length > 0, [name])

  return (
    <VStack align="stretch" spacing="4">
      <Heading size="md">{t('title.register')}</Heading>
      <Input value={name} onChange={(e) => setName(e.target.value)} placeholder={t('login.name')} />
      <Button
        colorScheme="teal"
        isDisabled={!isValid}
        onClick={() => {
          login(name)
          navigate('/profile', { replace: true })
        }}
      >
        {t('register.submit')}
      </Button>
    </VStack>
  )
}


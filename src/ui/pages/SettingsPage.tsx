import {
  Box,
  Divider,
  Heading,
  HStack,
  Select,
  Switch,
  Text,
  VStack,
  useColorModeValue
} from '@chakra-ui/react'
import { useUiStore } from '@/store/uiStore'

export function SettingsPage() {
  const subtleText = useColorModeValue('gray.600', 'gray.400')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const colorMode = useUiStore((s) => s.colorMode)
  const toggleColorMode = useUiStore((s) => s.toggleColorMode)
  const locale = useUiStore((s) => s.locale)
  const setLocale = useUiStore((s) => s.setLocale)

  return (
    <VStack align="stretch" spacing="6">
      <Heading size="md">设置</Heading>
      <Text color={subtleText}>在这里管理应用的偏好和外观。</Text>

      <Box border="1px solid" borderColor={borderColor} borderRadius="md" overflow="hidden">
        <VStack spacing="0" divider={<Divider />}>
          <HStack
            px="4"
            py="3"
            alignItems="center"
            justifyContent="space-between"
            w="100%"
            gap="4"
          >
            <Text fontWeight="medium" flex="1">
              深色浅色切换
            </Text>
            <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
          </HStack>
          <HStack
            px="4"
            py="3"
            alignItems="center"
            justifyContent="space-between"
            w="100%"
            gap="4"
          >
            <Text flex="1">语言</Text>
            <Select
              value={locale}
              onChange={(e) => setLocale(e.target.value as typeof locale)}
              size="sm"
              width="140px"
            >
              <option value="zh-CN">中文</option>
              <option value="en">English</option>
            </Select>
          </HStack>
          <HStack
            px="4"
            py="3"
            alignItems="center"
            justifyContent="space-between"
            w="100%"
            gap="4"
          >
            <Text flex="1">通知偏好（占位）</Text>
            <Text color={subtleText}>未配置</Text>
          </HStack>
          <HStack
            px="4"
            py="3"
            alignItems="center"
            justifyContent="space-between"
            w="100%"
            gap="4"
          >
            <Text flex="1">隐私设置（占位）</Text>
            <Text color={subtleText}>未配置</Text>
          </HStack>
        </VStack>
      </Box>
    </VStack>
  )
}

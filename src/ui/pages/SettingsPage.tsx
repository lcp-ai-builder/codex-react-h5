import {
  Box,
  Divider,
  Heading,
  HStack,
  Switch,
  Text,
  VStack,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'

export function SettingsPage() {
  const subtleText = useColorModeValue('gray.600', 'gray.400')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const { colorMode, toggleColorMode } = useColorMode()

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

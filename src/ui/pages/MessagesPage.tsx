import { Heading, Text, VStack, useColorModeValue } from '@chakra-ui/react'

export function MessagesPage() {
  const subtleText = useColorModeValue('gray.600', 'gray.400')

  return (
    <VStack align="stretch" spacing="4">
      <Heading size="md">消息</Heading>
      <Text color={subtleText}>这里是“消息”页面的占位内容。</Text>
    </VStack>
  )
}

import { Heading, Text, VStack, useColorModeValue } from '@chakra-ui/react'

export function MyPage() {
  const subtleText = useColorModeValue('gray.600', 'gray.400')

  return (
    <VStack align="stretch" spacing="4">
      <Heading size="md">我的</Heading>
      <Text color={subtleText}>这里是“我的”页面的占位内容。</Text>
    </VStack>
  )
}

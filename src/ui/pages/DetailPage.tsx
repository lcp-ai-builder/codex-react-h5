import { Box, Button, Heading, HStack, Spacer, Text, VStack, useColorModeValue } from '@chakra-ui/react'
import { Link as RouterLink, useParams } from 'react-router-dom'
import { useItemsStore } from '@/store/itemsStore'
import { ThemeToggleButton } from '@/ui/components/ThemeToggleButton'

export function DetailPage() {
  const params = useParams()
  const id = Number(params.id)
  const { getById } = useItemsStore()
  const item = Number.isFinite(id) ? getById(id) : undefined
  const subtleText = useColorModeValue('gray.600', 'gray.400')

  return (
    <VStack align="stretch" spacing="6">
      <HStack>
        <Heading size="md">Detail</Heading>
        <Spacer />
        <ThemeToggleButton />
      </HStack>

      <Box>
        <Text color={subtleText}>ID: {params.id}</Text>
        {item ? (
          <Box mt="3">
            <Text fontWeight="semibold">{item.title}</Text>
            <Text mt="1" color={subtleText}>
              {item.description}
            </Text>
          </Box>
        ) : (
          <Text mt="3" color="red.500">
            Item not found. Go back to List and refresh.
          </Text>
        )}
      </Box>

      <Button as={RouterLink} to="/list" variant="outline">
        Back to List
      </Button>
    </VStack>
  )
}

import {
  Badge,
  Button,
  Heading,
  HStack,
  List,
  ListItem,
  Spacer,
  Text,
  VStack,
  useColorModeValue
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { useItemsStore } from '@/store/itemsStore'
import { ThemeToggleButton } from '@/ui/components/ThemeToggleButton'
import { useEffect } from 'react'

export function ListPage() {
  const { items, refresh, lastUpdatedAt } = useItemsStore()
  const subtleText = useColorModeValue('gray.600', 'gray.400')

  useEffect(() => {
    if (items.length) return
    void refresh()
  }, [items.length, refresh])

  return (
    <VStack align="stretch" spacing="6">
      <HStack>
        <Heading size="md">List</Heading>
        <Spacer />
        <ThemeToggleButton />
      </HStack>

      <HStack>
        <Button size="sm" onClick={refresh}>
          Refresh
        </Button>
        {lastUpdatedAt ? (
          <Badge colorScheme="green">{new Date(lastUpdatedAt).toLocaleTimeString()}</Badge>
        ) : (
          <Text color={subtleText}>Not loaded</Text>
        )}
      </HStack>

      <List spacing="3">
        {items.map((item) => (
          <ListItem key={item.id}>
            <HStack>
              <Text fontWeight="semibold">{item.title}</Text>
              <Spacer />
              <Button as={RouterLink} to={`/detail/${item.id}`} size="sm" variant="outline">
                Detail
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>

      <Button as={RouterLink} to="/" variant="ghost">
        Back
      </Button>
    </VStack>
  )
}

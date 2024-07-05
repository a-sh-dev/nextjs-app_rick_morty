import { useUserContext } from '@/context/userContext'
import { PageRoute } from '@/utils/config'
import { Avatar, Box, Button, HStack, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'

export const UserDetails = () => {
  const { user, logout } = useUserContext()

  const handleLogout = () => {
    logout()
  }

  return user?.username ? (
    <Stack direction={{ base: 'column', md: 'row' }}>
      <HStack>
        <Avatar name={user.username} textTransform="uppercase" as="div" />
        <Box p={2} maxW="7rem">
          <Text as="b" casing="capitalize" noOfLines={1}>
            {user.username}
          </Text>
          <Text fontSize="small" casing="capitalize" noOfLines={1}>
            {user.jobTitle}
          </Text>
        </Box>
      </HStack>
      <HStack>
        <Link href={PageRoute.Home}>
          <Button size="xs" variant="outline">
            Edit
          </Button>
        </Link>
        <Button
          size="xs"
          variant="outline"
          onClick={handleLogout}
          colorScheme="red"
        >
          Exit
        </Button>
      </HStack>
    </Stack>
  ) : (
    <></>
  )
}

import { useUserContext } from '@/context/userContext'
import { PageRoute } from '@/utils/config'
import { Avatar, Box, Button, HStack, Text } from '@chakra-ui/react'
import Link from 'next/link'

export const UserDetails = () => {
  const { user, logout } = useUserContext()

  const handleLogout = () => {
    logout()
  }

  return user?.username ? (
    <HStack>
      <Avatar name={user.username} textTransform="uppercase" as="div" />
      <Box p={2}>
        <Text as="b" casing="capitalize">
          {user.username}
        </Text>
        <Text fontSize="small" casing="capitalize">
          {user.jobTitle}
        </Text>
      </Box>
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
    </HStack>
  ) : (
    <></>
  )
}

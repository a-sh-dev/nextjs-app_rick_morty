'use client'

import { useUserContext } from '@/context/userContext'
import { PageRoute } from '@/utils/config'
import { Avatar, Box, Button, HStack, Text } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

export const UserDetails = () => {
  const { user } = useUserContext()
  const router = useRouter()

  const handleEdit = () => {
    router.replace(PageRoute.Home)
  }

  return user ? (
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
      <Button size="xs" variant="outline" onClick={handleEdit}>
        Edit
      </Button>
    </HStack>
  ) : (
    <></>
  )
}

'use client'

import { useUserContext } from '@/context/userContext'
import { PageRoute } from '@/utils/config'
import { Button, HStack, Spacer, StackDivider, Text } from '@chakra-ui/react'
import Link from 'next/link'
import UserDetails from './UserDetails'

const Logo = () => {
  return (
    <>
      <Link href={PageRoute.Info}>
        <HStack>
          <Text as="span" fontSize="xx-large">
            👾
          </Text>
          <Text
            as="span"
            hideBelow="lg"
            fontSize={{ base: 'large', sm: 'xx-large' }}
            fontWeight="extrabold"
          >
            Rick+Morty
          </Text>
        </HStack>
      </Link>
    </>
  )
}

const Header = () => {
  const { user } = useUserContext()

  return (
    <HStack as="header" p="4">
      <HStack divider={<StackDivider borderColor="purple.300" />} spacing={4}>
        <Logo />
        <Link href={PageRoute.Info}>
          <Button size="sm" borderRadius={50} isDisabled={!user}>
            Info
          </Button>
        </Link>
      </HStack>
      <Spacer />
      <UserDetails />
    </HStack>
  )
}

export default Header

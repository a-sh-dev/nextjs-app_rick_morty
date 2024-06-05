'use client'

import { useUserContext } from '@/context/userContext'
import { PageRoute } from '@/utils/config'
import { HStack, Spacer, StackDivider, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { RoundedButton } from './RoundedButton'
import { UserDetails } from './UserDetails'

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

export const Header = () => {
  const { user } = useUserContext()

  return (
    <HStack as="header" p="4">
      <HStack divider={<StackDivider borderColor="gray.400" />} spacing={4}>
        <Logo />
        <Link href={PageRoute.Info}>
          <RoundedButton isDisabled={!user?.username}>Info</RoundedButton>
        </Link>
      </HStack>
      <Spacer />
      <UserDetails />
    </HStack>
  )
}

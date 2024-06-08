import { PageTitle } from '@/components/PageTitle'
import { PageRoute } from '@/utils/config'
import { Box, Button, Center, HStack, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'

export default function Info() {
  return (
    <>
      <VStack spacing={10} mt={10} as="main">
        <Box maxW="80%" textAlign="center">
          <PageTitle>Information</PageTitle>
          <Text fontSize="2xl" mb={2}>
            Welcome to the ultimate hub for all things Rick and Morty! This site
            is your go-to destination for everything you need to know about the
            dynamic duo.
          </Text>
          <Text>
            While in beta mode, check out the Characters page to dive into the
            world of the show. The Episodes page is coming soon!
          </Text>
        </Box>
        <Center>
          <HStack spacing={6}>
            <Link href={PageRoute.Characters}>
              <Button size="lg">Characters</Button>
            </Link>
            <Button isDisabled size="lg">
              Episodes
            </Button>
          </HStack>
        </Center>
      </VStack>
    </>
  )
}

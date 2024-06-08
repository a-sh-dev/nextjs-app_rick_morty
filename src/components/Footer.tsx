import { Center, Link, Text } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <Center as="footer" h="3rem" mt={3}>
      <Text fontSize="small" textAlign="center">
        Crafted with ❤️ (within a very limited time) by{' '}
        <Link
          color="purple.500"
          fontWeight="bold"
          isExternal
          href="https://github.com/a-sh-dev/nextjs_app_rick_morty"
        >
          a.sh
        </Link>{' '}
        in 2024.
      </Text>
    </Center>
  )
}

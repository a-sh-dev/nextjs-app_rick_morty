import { Heading } from '@chakra-ui/react'

export const PageTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <Heading as="h1" size="2xl" mb={5}>
      {children}
    </Heading>
  )
}

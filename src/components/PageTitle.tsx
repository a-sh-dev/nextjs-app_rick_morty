import { Heading } from '@chakra-ui/react'

const PageTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <Heading as="h1" size="3xl" mb={5}>
      {children}
    </Heading>
  )
}

export default PageTitle

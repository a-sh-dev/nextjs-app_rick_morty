import { AbsoluteCenter, Spinner as ChakraSpinner } from '@chakra-ui/react'

export const LoadingSpinner = () => {
  return (
    <AbsoluteCenter axis="both">
      <ChakraSpinner size="xl" />
    </AbsoluteCenter>
  )
}

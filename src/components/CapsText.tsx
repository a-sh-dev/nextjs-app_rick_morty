import { Text } from '@chakra-ui/react'

export const CapsText = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text casing="uppercase" fontSize="xx-small" letterSpacing={2}>
      {children}
    </Text>
  )
}

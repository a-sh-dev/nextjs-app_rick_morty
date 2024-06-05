import { Button } from '@chakra-ui/react'
import React from 'react'

type RoundedButtonProps = {
  children: React.ReactNode
} & (typeof Button)['defaultProps']

export const RoundedButton = ({
  children,
  ...restProps
}: RoundedButtonProps) => {
  return (
    <Button size={{ base: 'xs', md: 'sm' }} borderRadius={50} {...restProps}>
      {children}
    </Button>
  )
}

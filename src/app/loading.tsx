import { AbsoluteCenter, Spinner } from '@chakra-ui/react'

export default function Loading() {
  return (
    <AbsoluteCenter axis="both">
      <Spinner size="xl" />
    </AbsoluteCenter>
  )
}

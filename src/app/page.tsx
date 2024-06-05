import { UserForm } from '@/components/UserForm'
import { AbsoluteCenter } from '@chakra-ui/react'

export default function Home() {
  return (
    <AbsoluteCenter as="main">
      <UserForm />
    </AbsoluteCenter>
  )
}

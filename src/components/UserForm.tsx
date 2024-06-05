'use client'

import { UserDetails, useUserContext } from '@/context/userContext'
import { PageRoute } from '@/utils/config'
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FormInput } from './FormInput'

const INITIAL_VALUES: UserDetails = {
  username: '',
  jobTitle: '',
}

export const UserForm = () => {
  const { user, setUser } = useUserContext()
  const [values, setValues] = React.useState<UserDetails>(INITIAL_VALUES)
  const [isEditing, setIsEditing] = React.useState(false)

  const router = useRouter()

  React.useEffect(() => {
    if (user) {
      setValues(user)
      setIsEditing(true)
    }
  }, [user])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    setUser(values)
    router.replace(PageRoute.Info)
  }

  const handleReset = () => {
    setValues(INITIAL_VALUES)
  }

  return (
    <Flex
      width="full"
      align="center"
      justifyContent="center"
      direction="column"
      gap={20}
    >
      <Box
        p={8}
        minWidth="400px"
        maxWidth="500px"
        borderRadius={8}
        boxShadow="lg"
        bg="purple.50"
      >
        <Box textAlign="center">
          <Heading>{isEditing ? 'Edit Details' : 'Hey, there! 👋'}</Heading>
          {!isEditing && (
            <Text mb={8}>
              In order to access the site, please fill in the form below (all
              required).
            </Text>
          )}
        </Box>
        <Box my={4} textAlign="left">
          <form onSubmit={handleSubmit}>
            <FormInput
              name="username"
              label="Username"
              placeholder="leonardo"
              value={values.username}
              onChange={onChange}
            />
            <FormInput
              name="jobTitle"
              label="Job Title"
              placeholder="Developer"
              value={values.jobTitle}
              onChange={onChange}
            />
            <Flex direction={{ base: 'column', md: 'row' }} mt={4} gap={2}>
              <Button width={{ base: 'full', md: '' }} type="submit" size="lg">
                {isEditing ? 'Save' : 'Submit'}
              </Button>
              <Button
                width={{ base: 'full', md: '' }}
                size="lg"
                variant="outline"
                onClick={handleReset}
              >
                Reset
              </Button>
            </Flex>
          </form>
        </Box>
      </Box>
    </Flex>
  )
}

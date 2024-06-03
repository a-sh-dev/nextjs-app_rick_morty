'use client'

import { USER_SESSION_KEY } from '@/utils/config'
import React from 'react'

export interface UserDetails {
  username: string
  jobTitle: string
}

interface UserContextType {
  user: UserDetails | undefined
  setUser: (user: UserDetails) => void
}

const UserContext = React.createContext<UserContextType | undefined>(undefined)

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [user, setUser] = React.useState<UserDetails | undefined>(undefined)

  const isClientSide = typeof window !== 'undefined'

  React.useEffect(() => {
    if (isClientSide) {
      const storedUser = window.sessionStorage.getItem(USER_SESSION_KEY)

      if (storedUser) {
        setUser(JSON.parse(storedUser))
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  React.useEffect(() => {
    if (isClientSide && user) {
      window.sessionStorage.setItem(USER_SESSION_KEY, JSON.stringify(user))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  const userContext = React.useContext(UserContext)
  if (!userContext) {
    throw new Error('useUserContext must be used within a UserContextProvider')
  }
  return userContext
}

'use client'

import { PageRoute, USERNAME } from '@/utils/config'
import { deleteCookie, setCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import React from 'react'

const USER_SESSION_KEY = 'rickMontyUser'
export interface UserDetails {
  username: string
  jobTitle: string
}

interface UserSessionContextType {
  user: UserDetails | undefined
  setUser: (user: UserDetails) => void
  logout: () => void
}

const UserSessionContext = React.createContext<
  UserSessionContextType | undefined
>(undefined)

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [user, setUser] = React.useState<UserDetails | undefined>(undefined)

  const router = useRouter()

  // Safeguard from SSR error/warning
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
      // For middleware
      setCookie(USERNAME, user.username)
      router.replace(PageRoute.Info)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const logout = () => {
    setUser(undefined)
    if (isClientSide) {
      window.sessionStorage.removeItem(USER_SESSION_KEY)
      // Remove cookies
      deleteCookie(USERNAME)
      router.replace(PageRoute.Home)
    }
  }

  return (
    <UserSessionContext.Provider
      value={{
        user,
        setUser,
        logout,
      }}
    >
      {children}
    </UserSessionContext.Provider>
  )
}

export const useUserContext = () => {
  const userContext = React.useContext(UserSessionContext)
  if (!userContext) {
    throw new Error('useUserContext must be used within a UserContextProvider')
  }
  return userContext
}

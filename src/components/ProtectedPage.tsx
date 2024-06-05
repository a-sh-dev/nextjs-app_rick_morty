'use client'

import { useUserContext } from '@/context/userContext'
import { PageRoute } from '@/utils/config'
import { useRouter } from 'next/navigation'
import React from 'react'

export const ProtectedPage = () => {
  const { user } = useUserContext()
  const router = useRouter()

  const hasUserSession = !!user?.username

  // As a workaround for not using 'middleware' to redirect
  // user who doesn't have access
  React.useLayoutEffect(() => {
    if (!hasUserSession) {
      router.replace(PageRoute.Home)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasUserSession])

  return <></>
}

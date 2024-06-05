'use client'

import { UserContextProvider } from '@/context/userContext'
import { theme } from '@/styles/theme'
import { HttpLink } from '@apollo/client'
import {
  ApolloClient,
  ApolloNextAppProvider,
  InMemoryCache,
} from '@apollo/experimental-nextjs-app-support'
import { ChakraProvider } from '@chakra-ui/react'

function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}

function makeClient() {
  const httpLink = new HttpLink({
    uri: 'https://rickandmortyapi.com/graphql',
    fetchOptions: { cache: 'no-store' },
  })

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  })
}

function ApolloProvider({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  )
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider>
      <ThemeProvider>
        <UserContextProvider>{children}</UserContextProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}

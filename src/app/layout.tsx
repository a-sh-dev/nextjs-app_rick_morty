import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Providers } from '@/lib/providers'
import { fonts } from '@/styles/fonts'
import { Box, Container } from '@chakra-ui/react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rick+Morty',
  description: 'The go-to destination for everything about the Rick & Morty.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={fonts.rubik.variable}>
      <body>
        <Providers>
          <Box bg="gray.100">
            <Container
              maxWidth={{ base: 'container.sm', md: 'xl', lg: '4xl' }}
              minHeight="100vh"
              display="flex"
              flexDirection="column"
            >
              <Header />
              <Box flex={1}>{children}</Box>
              <Footer />
            </Container>
          </Box>
        </Providers>
      </body>
    </html>
  )
}

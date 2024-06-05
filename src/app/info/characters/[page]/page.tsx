'use client'

import { CharacterCard } from '@/components/CharacterCard'
import { PageTitle } from '@/components/PageTitle'
import { Pagination } from '@/components/Pagination'
import { GET_CHARACTERS_QUERY } from '@/graphql/characters'
import {
  convertDataForDisplay,
  ModifiedRawCharactersData,
} from '@/utils/convertDataForDisplay'
import { useSuspenseQuery } from '@apollo/client'
import { Box, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export default function Characters({ params }: { params: { page: string } }) {
  const currentPagePath = Number(params.page)
  const [currentPage, setCurrentPage] = React.useState(currentPagePath)

  const { data } = useSuspenseQuery<ModifiedRawCharactersData>(
    GET_CHARACTERS_QUERY,
    { variables: { page: currentPage } },
  )

  const { info, characters } = convertDataForDisplay(data)

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage)
  }

  const pageInfo = {
    currentPage,
    pageLimitPerSet: 7,
    totalPages: info.totalPages,
    charactersCountPerPage: info.charactersCountPerPage,
    onPageChange: handlePageChange,
  }

  return (
    <VStack spacing={10} mt={10} as="main">
      <Box maxW="80%" textAlign="center">
        <PageTitle>Characters</PageTitle>
        <Text mb={2} fontSize="small">
          Click to view detailed character information.
        </Text>
      </Box>
      <Pagination {...pageInfo} />
      <SimpleGrid columns={{ base: 2, sm: 3, lg: 4 }} spacing={5}>
        {characters.map((character) => (
          <CharacterCard key={character.id} {...character} />
        ))}
      </SimpleGrid>
      <Pagination {...pageInfo} />
    </VStack>
  )
}

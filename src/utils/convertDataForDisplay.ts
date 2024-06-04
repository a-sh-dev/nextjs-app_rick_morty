import charactersJSONData from '@/data/getCharactersQuerySampleData.json'

/**
 * This is a workaround for not using a code generator tool
 * to automatically type due to time constraints for setting it up.
 */
// Infer the type from the JSON data
type RawCharactersData = typeof charactersJSONData

// Add type flexibility for CharactersInfo
type CharactersInfoOverride = {
  prev: number | null
  next: number | null
}

// Modify the type inference by removing the fields to override
type ExtendedCharactersData = Omit<
  RawCharactersData['data']['characters']['info'],
  'prev' | 'next'
> &
  CharactersInfoOverride

// Combine the inferred type and the type overrides
export type ModifiedRawCharactersData = {
  characters: {
    info: ExtendedCharactersData
    results: RawCharactersData['data']['characters']['results']
  }
}

// API data converter/transformer for client-side or display data model
export const convertDataForDisplay = (data: ModifiedRawCharactersData) => {
  const info = data.characters.info
  const charactersCountPerPage = data.characters.results.length
  const characters = data.characters.results.map((character) => {
    return {
      id: character.id,
      name: character.name,
      image: character.image,
      species: character.species,
      type: character.type,
      origin: character.origin.name,
    }
  })

  return {
    info: {
      totalPages: info.pages,
      totalCharacters: info.count,
      charactersCountPerPage,
      hasNextPage: !!info?.next,
      hasPrevPage: !!info?.prev,
    },
    characters,
  }
}

export type CharactersDataDisplayType = ReturnType<typeof convertDataForDisplay>

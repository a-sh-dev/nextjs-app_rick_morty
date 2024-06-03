import { gql } from '@apollo/client'

export const GET_CHARACTERS_QUERY = gql`
  query getCharacters($page: Int) {
    characters(page: $page) {
      info {
        pages
        count
        prev
        next
      }
      results {
        id
        name
        image
        species
        type
        origin {
          name
        }
      }
    }
  }
`

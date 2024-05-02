import { searchResultFragment } from '../fragments/search-result-fragment'

export const getAllProductsQuery = /* GraphQL */ `
  query getAllProducts($input: SearchInput!) {
    search(input: $input) {
      items {
        ...SearchResult
      }
      metafields(
        identifiers: [
          { namespace: "next_app", key: "variant_1_color" }
          { namespace: "next_app", key: "variant_2_color" }
          { namespace: "next_app", key: "variant_3_color" }
          { namespace: "next_app", key: "variant_1_page" }
          { namespace: "next_app", key: "variant_2_page" }
        ]
      ) {
        id
        key
        value
      }
    }
  }
  ${searchResultFragment}
`

export const productConnectionFragment = /* GraphQL */ `
  fragment productConnection on ProductConnection {
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    edges {
      node {
        id
        handle
        availableForSale
        title
        vendor
        description
        descriptionHtml
        options {
          id
          name
          values
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        variants(first: 250) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          edges {
            node {
              id
              title
              sku
              availableForSale
              requiresShipping
              selectedOptions {
                name
                value
              }
              priceV2 {
                amount
                currencyCode
              }
              compareAtPriceV2 {
                amount
                currencyCode
              }
            }
          }
        }
        featuredImage {
					url(transform: { maxWidth: 1100 })
          width
          height
				}
        images(first: 1) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          edges {
            node {
              url(transform: { maxWidth: 1100 })
              altText
              width
              height
            }
          }
        }
        metafields(
					identifiers: [
						{ namespace: "next_app", key: "variant_1_color" }
						{ namespace: "next_app", key: "variant_2_color" }
						{ namespace: "next_app", key: "variant_3_color" }
						{ namespace: "next_app", key: "variant_1_page" }
						{ namespace: "next_app", key: "variant_2_page" }
						{ namespace: "next_app", key: "variant_3_page" }
					]
				) {
					id
					key
					value
				}
      }
    }
  }
`

const getAllProductsQuery = /* GraphQL */ `
  query getAllProducts(
    $first: Int = 250
    $query: String = ""
    $sortKey: ProductSortKeys = RELEVANCE
    $reverse: Boolean = false
  ) {
    products(first: $first, sortKey: $sortKey, reverse: $reverse, query: $query) {
      ...productConnection
    }
  }

  ${productConnectionFragment}
`
export default getAllProductsQuery

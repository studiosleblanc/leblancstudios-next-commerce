export const getProductQuery = /* GraphQL */ `
  query getProduct($slug: String!) {
    product(slug: $slug) {
      id
      name
      slug
      description
      assets {
        id
        preview
        name
      }
      featuredImage {
        url(transform: { maxWidth: 1100 })
        height
        width
      }
      variants {
        id
        priceWithTax
        currencyCode
        options {
          id
          name
          code
          groupId
          group {
            id
            options {
              name
            }
          }
        }
      }

      optionGroups {
        id
        code
        name
        options {
          id
          name
        }
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
`

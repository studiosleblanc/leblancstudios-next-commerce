import type { ProductMetafield } from '@commerce/types/product'

export type ColorVariant = {
  color: string
  page: string
  hexcolors?: string[]
}

export const getColoVariantsFromMetafields = (metafields: ProductMetafield[]) => {
  const variant_1_items = metafields.filter(item => item.key.includes('variant_1'))
  const variant_2_items = metafields.filter(item => item.key.includes('variant_2'))
  const variant_3_items = metafields.filter(item => item.key.includes('variant_3'))
  const variant_4_items = metafields.filter(item => item.key.includes('variant_4'))

  const variants = [variant_1_items, variant_2_items, variant_3_items]

  const obj = variants.map((variant, i) => {
    return {
      color: variant.find(childItem => childItem.key === `variant_${i + 1}_color`)
        ?.value,
      hexColors: variant.find(
        childItem => childItem.key === `variant_${i + 1}_color`
      )?.hexColors,
      page: variant.find(childItem => childItem.key === `variant_${i + 1}_page`)
        ?.value,
    }
  })

  return obj.filter(item => item.color !== undefined)
}

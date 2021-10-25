import cn from 'classnames'
import type { SearchPropsType } from '@lib/search-props'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

import { Layout, MainLayout } from '@leblanc/layouts'
import { ProductCard } from '@components/product'
import type { Product } from '@commerce/types/product'
import { Container, Grid, Skeleton } from '@components/ui'

import useSearch from '@framework/product/use-search'

import getSlug from '@lib/get-slug'
import rangeMap from '@lib/range-map'

const SORT = Object.entries({
  'trending-desc': 'Trending',
  'latest-desc': 'Latest arrivals',
  'price-asc': 'Price: Low to high',
  'price-desc': 'Price: High to low',
})

import {
  filterQuery,
  getCategoryPath,
  getDesignerPath,
  useSearchMeta,
} from '@lib/search'
import { CollectionGrid } from '@leblanc/components/collection'
import { FeaturedSection } from '@leblanc/components/collection'
import { usePathItems } from '@leblanc/hooks/usePathItems'

export default function CollectionView({ categories, brands }: SearchPropsType) {
  const [activeFilter, setActiveFilter] = useState('')
  const [toggleFilter, setToggleFilter] = useState(false)

  // console.log(categories)

  const router = useRouter()
  const { asPath, locale } = router
  const pathItems = usePathItems(asPath)
  const collection = pathItems[pathItems.length - 1]
  // const { q, sort } = router.query
  // `q` can be included but because categories and designers can't be searched
  // in the same way of products, it's better to ignore the search input if one
  // of those is selected
  // const query = filterQuery({ sort })

  // console.log(pathItems)
  // console.log(collection)

  // const { pathname, category, brand } = useSearchMeta(asPath)

  const activeCollection = categories.find(
    (cat: any) => cat.slug === collection?.slug
  )
  // const activeBrand = brands.find(
  //   (b: any) => getSlug(b.node.path) === `brands/${brand}`
  // )?.node

  const { data, isLoading } = useSearch({
    // search: typeof q === 'string' ? q : '',
    categoryId: activeCollection?.id,
    // brandId: (activeBrand as any)?.entityId,
    // sort: typeof sort === 'string' ? sort : '',
    locale,
  })

  return (
    <MainLayout>
      {isLoading && <h1 className="text-center py-20 text-4xl">Loading...</h1>}
      {!isLoading && data?.found ? (
        <CollectionGrid products={data?.products || []} />
      ) : (
        <h1 className="text-center py-20 text-2xl">Collection Empty</h1>
      )}
      <FeaturedSection />
    </MainLayout>
  )
}

CollectionView.Layout = Layout

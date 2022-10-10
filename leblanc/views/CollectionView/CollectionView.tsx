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
import CollectionEmpty from '@leblanc/components/collection/CollectionEmpty'

export default function CollectionView({ categories, brands }: SearchPropsType) {
  const [activeFilter, setActiveFilter] = useState('')
  const [toggleFilter, setToggleFilter] = useState(false)
  const [dat, setData] = useState()
  // console.log(categories)

  const router = useRouter()
  const { asPath, locale } = router
  const { navItems } = usePathItems(asPath)
  const collection = navItems[navItems.length - 1]
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
      {isLoading && <CollectionEmpty text="Loading..." />}
      {!isLoading &&
        (activeCollection?.id && data?.found ? (
          <CollectionGrid products={data?.products || []} />
        ) : (
          <CollectionEmpty text="Collection Empty" />
        ))}
      <FeaturedSection />
    </MainLayout>
  )
}

CollectionView.Layout = Layout

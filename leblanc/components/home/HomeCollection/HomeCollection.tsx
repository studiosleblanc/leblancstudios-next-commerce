import useSearch from '@framework/product/use-search'
import { CollectionGrid } from '@leblanc/components/collection'
import { useRouter } from 'next/router'

const HomeCollection = ({ categories }: any): JSX.Element => {
  const router = useRouter()
  const { asPath, locale } = router

  const activeCollection = categories.find(
    (cat: any) => cat.slug === 'home-page-dev'
  )

  const { data, isLoading } = useSearch({
    // search: typeof q === 'string' ? q : '',
    categoryId: activeCollection?.id,
    // brandId: (activeBrand as any)?.entityId,
    // sort: typeof sort === 'string' ? sort : '',
    locale,
  })

  return (
    <>
      {!isLoading && activeCollection?.id && data?.found && (
        <CollectionGrid products={data?.products || []} />
      )}
    </>
  )
}

export default HomeCollection

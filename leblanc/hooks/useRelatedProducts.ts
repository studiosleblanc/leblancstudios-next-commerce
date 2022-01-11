import { useRouter } from 'next/router'
import useSearch from '@framework/product/use-search'

export function useRelatedProducts(q: string) {
  const router = useRouter()
  const { locale } = router
  const result = useSearch({
    search: q,
    locale,
  })

  return result
}

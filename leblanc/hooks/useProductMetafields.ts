import React, { useState, useEffect } from 'react'
import { ProductMetafield } from "@commerce/types/product"

export default function useProductMetafields (metafields: ProductMetafield[], key: string) {
  const [state, setState] = useState<ProductMetafield | null>(null)

  useEffect(() => {
    const field = metafields?.find(meta => meta.key === key)
    setState(field!)
  }, [])

  return state?.value
}

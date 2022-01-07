import React, { FC } from 'react'
import s from './ProductSpecs.module.css'
import useProductMetafields from '@leblanc/hooks/useProductMetafields'
import type { Product } from '@commerce/types/product'

interface Props {
  product: Product
}

const ProductSpecs: FC<Props> = ({ product }) => {
  const material = useProductMetafields(product.metafields, 'material')
  const madeIn = useProductMetafields(product.metafields, 'made_in')

  return (
    <div className={s.madeIn}>
      <p>
        {madeIn} <br /> {material}
      </p>
    </div>
  )
}

export default ProductSpecs

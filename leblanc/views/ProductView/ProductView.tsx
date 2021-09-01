import type { Product } from '@commerce/types/product'
import {
  ProductImage,
  ProductMeta,
  ProductSlider,
} from '@leblanc/components/Product'
import { MainLayout } from '@leblanc/layouts'
import React, { FC } from 'react'
import s from './ProductView.module.css'

interface Props {
  product: Product
  relatedProducts: Product[]
}

const ProductView: FC<Props> = ({ product, relatedProducts }) => {
  return (
    <MainLayout>
      <div className={s.gridRow}>
        <div className={s.imageCol}>
          <ProductImage />
        </div>
        <div className={s.metaCol}>
          <ProductMeta />
        </div>
      </div>
      <ProductSlider />
      <div>description row</div>
      <div>related products row</div>
    </MainLayout>
  )
}

export default ProductView

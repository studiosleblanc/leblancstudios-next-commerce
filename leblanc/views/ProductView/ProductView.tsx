import type { Product } from '@commerce/types/product'
import {
  ProductImage,
  ProductMeta,
  ProductSlider,
  RelatedProducts,
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
          <ProductImage images={product.images} />
        </div>
        <div className={s.metaCol}>
          <ProductMeta />
        </div>
      </div>
      <ProductSlider images={product.images} />
      <div className={s.descriptionRow}>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>
      <RelatedProducts />
    </MainLayout>
  )
}

export default ProductView

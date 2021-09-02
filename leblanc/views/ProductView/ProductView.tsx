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
      <div className={s.descriptionRow}>
        <h2>Black World Mass Observers T-Shirt</h2>
        <p>
          World Mass Observers t-shirt belongs to our latest collection No Medium
          Inserted F/W 2022, presented at the Dominican Republic. It features and
          reassambles the story of LEBLANCSTUDIOS a movement founded by two kids in
          the 2014. The Mass-Observation project of United Kingdom which conducted a
          series of human behaviour at work, on the street and many public spaces. We
          use this graphic as an analogy of how nowadays we are being watched and
          tracked by big corporations, same as The Mass-Observation Project did in
          the 1937-1960 with paid investigators and anonymously recording
          conversations.
        </p>
      </div>
      <div>related products row</div>
    </MainLayout>
  )
}

export default ProductView

import React, { FC } from 'react'
import cn from 'classnames'
import Image from 'next/image'
import { Product } from '@commerce/types/product'
import s from './CollectionGrid.module.css'
import { collection } from '@leblanc/data/collection'
import type { CollectionItem } from '@leblanc/data/collection'
import { ProductItem } from '@leblanc/components/Product'

interface Props {
  products: Product[]
}

const CollectionGrid: FC<Props> = ({ products }) => {
  // console.log(products)
  return (
    <div className={s.root}>
      {products.slice(0, 15).map((item: Product, i) => (
        <ProductItem key={item.name} item={item} i={i} />
      ))}
    </div>
  )
}

export default CollectionGrid

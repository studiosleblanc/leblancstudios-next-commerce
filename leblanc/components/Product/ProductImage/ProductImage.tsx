import React, { FC } from 'react'
import Image from 'next/image'
import s from './ProductImage.module.css'
import { ProductImage as ProductImageType } from '@commerce/types/product'

const placeholderImg = '/product-img-placeholder.svg'
interface Props {
  images: ProductImageType[]
}

const ProductImage: FC<Props> = ({ images }) => {
  return (
    <div className={s.root}>
      <Image
        src={images[0]?.url || placeholderImg}
        width={images[0]?.width || 800}
        height={images[0]?.height || 800}
        layout="responsive"
      />
    </div>
  )
}

export default ProductImage

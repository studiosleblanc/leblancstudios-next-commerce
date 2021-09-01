import React from 'react'
import Image from 'next/image'
import s from './ProductImage.module.css'

const ProductImage = () => {
  return (
    <div className={s.root}>
      <Image
        src="/assets/product/product_img.jpg"
        width={919}
        height={1244}
        layout="responsive"
      />
    </div>
  )
}

export default ProductImage

import React from 'react'
import Image from 'next/image'
import s from './RelatedProducts.module.css'

const RelatedProducts = () => {
  return (
    <div className={s.root}>
      <div>
        <h3 className={s.title}>Accessories {'>'} Bucket Hats</h3>
      </div>
      <div className={s.productsContainer}>
        <div className={s.product}>
          <Image
            width={559}
            height={749}
            objectFit="cover"
            src="/assets/collection/product3.jpg"
          />
        </div>
        <div className={s.product}>
          <Image
            width={559}
            height={749}
            objectFit="cover"
            src="/assets/collection/product3.jpg"
          />
        </div>
        <div className={s.product}>
          <Image
            width={559}
            height={749}
            objectFit="cover"
            src="/assets/collection/product3.jpg"
          />
        </div>
      </div>
    </div>
  )
}

export default RelatedProducts

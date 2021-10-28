import React, { FC } from 'react'
import Image from 'next/image'
import s from './RelatedProducts.module.css'
import type { Product } from '@commerce/types/product'

const placeholderImg = '/product-img-placeholder.svg'

interface Props {
  relatedProducts: Product[]
}

const RelatedProducts: FC<Props> = ({ relatedProducts }) => {
  return (
    <div className={s.root}>
      <div>
        <h3 className={s.title}>Accessories {'>'} Bucket Hats</h3>
      </div>
      <div className={s.productsContainer}>
        {/* <div className={s.product}>
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
        </div> */}
        {relatedProducts.map(relProd => (
          <div key={relProd.slug} className={s.product}>
            <Image
              src={relProd.images[0]?.url || placeholderImg}
              width={relProd.images[0]?.width || 800}
              height={relProd.images[0]?.height || 800}
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts

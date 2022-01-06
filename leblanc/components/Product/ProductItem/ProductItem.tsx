import React, { FC } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import Image from 'next/image'
import s from './ProductItem.module.css'
import usePrice from '@framework/product/use-price'
import type { CollectionItem } from '@leblanc/data/collection'
import { Product } from '@commerce/types/product'
import useProductMetafields from '@leblanc/hooks/useProductMetafields'

const placeholderImg = '/product-img-placeholder.svg'
interface Props {
  item: Product
  asCard?: boolean
}

const ProductItem: FC<Props> = ({ item, asCard = false }) => {
  console.log(item)

  const commonName = useProductMetafields(item.metafields, 'common_name')

  const { price } = usePrice({
    amount: item.price.value,
    baseAmount: item.price.retailPrice,
    currencyCode: item.price.currencyCode!,
  })

  return (
    <div className={cn(s.item, { [s.asCard]: asCard })} key={item.name}>
      <Link href={`/product/${item.slug}`}>
        <a className={s.imageContainer}>
          {item?.images && (
            <Image
              quality="85"
              src={item.images[0]?.url || placeholderImg}
              width={item.images[0]?.width || 800}
              height={item.images[0]?.height || 800}
              objectFit="cover"
              layout="responsive"
            />
          )}
        </a>
      </Link>
      <div className={s.details}>
        <div className={s.detailsContent}>
          <div className={s.colors}>
            {/* {item.colors &&
              item.colors.map(color => (
                <div
                  className={s.swatch}
                  key={color}
                  style={{ backgroundColor: color }}></div>
              ))} */}
          </div>
          <span className={s.price}>{price}</span>
          <span>{commonName}</span>
          <span>Available Sizes:</span>
          <ul className={s.sizes}>
            {/* {item.sizes.map(size => (
              <li key={size}>{size}</li>
            ))} */}
          </ul>
        </div>
        <div className={s.squeezeContainer}>
          <div className={s.squeeze}>Squeeze Out!</div>
        </div>
      </div>
      <div className={cn(s.caption, s.captionDesktop)}>{item.name}</div>
      <div className={cn(s.caption, s.captionMobile)}>
        <div className={s.captionPrice}>{price}</div>
        <div className={s.captionCommonName}>{commonName}</div>
      </div>
    </div>
  )
}

export default ProductItem

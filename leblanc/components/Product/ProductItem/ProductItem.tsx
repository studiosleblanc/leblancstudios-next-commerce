import React, { FC } from 'react'
import cn from 'classnames'
import Image from 'next/image'
import s from './ProductItem.module.css'
import type { CollectionItem } from '@leblanc/data/collection'
import { Product } from '@commerce/types/product'

interface Props {
  item: Product
  asCard?: boolean
}

const ProductItem: FC<Props> = ({ item, asCard = false }) => {
  return (
    <div className={cn(s.item, { [s.asCard]: asCard })} key={item.name}>
      <div className={s.imageContainer}>
        {item.images && (
          <Image
            quality="85"
            src={item.images[0].url}
            width={item.images[0].width}
            height={item.images[0].height}
            objectFit="cover"
            layout="responsive"
          />
        )}
      </div>
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
          <span className={s.price}>price</span>
          <span>{item.name}</span>
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
      <div className={s.caption}>item collection</div>
    </div>
  )
}

export default ProductItem

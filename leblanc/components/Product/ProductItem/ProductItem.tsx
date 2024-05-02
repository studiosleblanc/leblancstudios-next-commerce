import React, { FC, useState } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import Image from 'next/image'
import s from './ProductItem.module.css'
import usePrice from '@framework/product/use-price'
import type { CollectionItem } from '@leblanc/data/collection'
import { Product } from '@commerce/types/product'
import useProductMetafields from '@leblanc/hooks/useProductMetafields'
import ProductItemSizes from './ProductItemSizes'
import ProductItemColors from './ProductItemColors'
import { SqueezeOut } from '..'

const placeholderImg = '/product-img-placeholder.svg'
interface Props {
  item: Product
  asCard?: boolean
  i: number
}

const ProductItem: FC<Props> = ({ item, asCard = false, i }) => {
  const [squeezeOut, setSqueezeOut] = useState(false)
  const commonName = useProductMetafields(item.metafields, 'common_name')
  const cardLightText = useProductMetafields(item.metafields, 'card_light_text')

  const { price } = usePrice({
    amount: item.price.value,
    baseAmount: item.price.retailPrice,
    currencyCode: item.price.currencyCode!,
  })

  const toggleSqueezeOut = () => {
    setSqueezeOut(!squeezeOut)
  }

  return (
    <div className={cn(s.item, { [s.asCard]: asCard })} key={item.name}>
      <Link href={`/product/${item.slug}`}>
        <a className={s.imageContainer}>
          {item?.images && (
            <Image
              unoptimized
              src={item.featuredImage?.url || placeholderImg}
              width={item.featuredImage?.width || 800}
              height={item.featuredImage?.height || 800}
              objectFit="cover"
              layout="responsive"
            />
          )}
        </a>
      </Link>
      <div className={cn(s.details, { [s.lightTheme]: cardLightText === 'true' })}>
        <div className={s.detailsContent}>
          {item.options?.map(opt => (
            <React.Fragment key={opt.id}>
              {opt.displayName.includes('color') && (
                <ProductItemColors product={item} option={opt} />
              )}
            </React.Fragment>
          ))}
          <span className={s.price}>{price}</span>
          <span>{commonName}</span>
          <ProductItemSizes options={item.options} />
        </div>
        <div className={s.squeezeContainer}>
          <button className={s.squeezeButton} onClick={toggleSqueezeOut}>
            Squeeze Out!
          </button>
        </div>
      </div>
      <div className={s.swatchesMobile}>
        {item.options?.map(opt => (
          <React.Fragment key={opt.id}>
            {opt.displayName.includes('color') && (
              <ProductItemColors product={item} option={opt} />
            )}
          </React.Fragment>
        ))}
      </div>
      <div
        className={cn(
          s.caption,
          { [s.lightTheme]: cardLightText === 'true' },
          s.captionDesktop
        )}>
        {item.name}
      </div>
      <div
        className={cn(
          s.caption,
          { [s.lightTheme]: cardLightText === 'true' },
          s.captionMobile
        )}>
        <div className={s.captionPrice}>{price}</div>
        <div className={s.captionCommonName}>{commonName}</div>
      </div>
      {squeezeOut && item && (
        <SqueezeOut product={item} open={squeezeOut} setOpen={setSqueezeOut} i={i} />
      )}
    </div>
  )
}

export default ProductItem

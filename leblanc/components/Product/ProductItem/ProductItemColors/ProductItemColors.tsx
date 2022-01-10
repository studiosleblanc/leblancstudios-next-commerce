import React, { FC } from 'react'
import s from './ProductItemColors.module.css'
import Link from 'next/link'
import type { Product, ProductOption } from '@commerce/types/product'
import { getColoVariantsFromMetafields } from '@leblanc/utils/colorMetafields'
import { setBgColor, setLabel } from '@leblanc/utils/colors'

interface Props {
  product: Product
  option: ProductOption
}

const ProductItemColors: FC<Props> = ({ product, option }) => {
  const colorVariants = getColoVariantsFromMetafields(product?.metafields)
  return (
    <ul className={s.colors}>
      {/* {item.colors &&
              item.colors.map(color => (
                <div
                className={s.swatch}
                key={color}
                style={{ backgroundColor: color }}></div>
              ))} */}

      {option.values &&
        option.values.map((v, i: number) => {
          return (
            <li key={`${option.id}-${v.label}-${i}`}>
              <Link href={`/product/${product.slug}`}>
                <a
                  className={s.swatch}
                  style={{
                    backgroundColor: v.hexColors
                      ? setBgColor(v.hexColors)
                      : 'transparent',
                  }}
                  aria-label={v.label.toLowerCase()}>
                  {v.hexColors ? '' : setLabel(v.label || '')}
                </a>
              </Link>
            </li>
          )
        })}

      {/* Metafields Colors */}
      {colorVariants &&
        colorVariants.map(opt => (
          <li key={opt.color}>
            <Link href={`/product/${opt.page}`}>
              <a
                className={s.swatch}
                style={{
                  backgroundColor: opt.hexColors
                    ? setBgColor(opt.hexColors)
                    : 'transparent',
                }}
                aria-label={setLabel(opt.color || '')}>
                {opt.hexColors ? '' : setLabel(opt.color || '')}
              </a>
            </Link>
          </li>
        ))}
    </ul>
  )
}

export default ProductItemColors

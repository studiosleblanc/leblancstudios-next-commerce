import React, { FC } from 'react'
import s from './ProductItemSizes.module.css'
import type { ProductOption } from '@commerce/types/product'

interface Props {
  options: ProductOption[]
}

const ProductItemSizes: FC<Props> = ({ options }) => {
  if (!options.find(o => o.displayName.includes('size'))) {
    return null
  }
  return (
    <>
      <span>Available Sizes:</span>
      <ul className={s.sizes}>
        {options
          .find(o => o.displayName.includes('size'))
          ?.values.map(val => (
            <li key={val.label}>{val.label}</li>
          ))}
      </ul>
    </>
  )
}

export default ProductItemSizes

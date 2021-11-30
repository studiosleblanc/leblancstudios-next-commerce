import React, { FC } from 'react'
import s from './AddToCart.module.css'
import type { ProductVariant } from '@commerce/types/product'

interface Props {
  addToCart: () => Promise<void>
  variant: ProductVariant
  loading: boolean
  text: string
}

const AddToCart: FC<Props> = ({ addToCart, variant, loading, text }) => {
  const disabled =
    (loading || variant?.availableForSale === false) === false ? false : true
  return (
    <button
      onClick={addToCart}
      aria-label="Add to Cart"
      className={s.root}
      disabled={disabled}>
      {!loading
        ? variant?.availableForSale === false
          ? 'Not Available'
          : text
        : 'loading...'}
      {}
    </button>
  )
}

export default AddToCart

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
  return (
    <>
      {loading ? (
        <span>loadding...</span>
      ) : (
        <button
          onClick={addToCart}
          aria-label="Add to Cart"
          className={s.root}
          disabled={variant?.availableForSale === false}>
          {text}
        </button>
      )}
    </>
  )
}

export default AddToCart

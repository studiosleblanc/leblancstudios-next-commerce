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
  return <button className={s.root}>{text}</button>
}

export default AddToCart

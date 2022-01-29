import React, { FC } from 'react'
import Image from 'next/image'
import s from './StyleWith.module.css'
// import useProductMetafields from '@leblanc/hooks/useProductMetafields'
import type { Product } from '@commerce/types/product'
import StyleWithCard from './StyleWithCard'

interface Props {
  product: Product
}

const StyleWith: FC<Props> = ({ product }) => {
  // const handle_1 = useProductMetafields(product.metafields, 'style_with_handle_1')
  // const handle_2 = useProductMetafields(product.metafields, 'style_with_handle_2')
  const handle_1 = product.metafields?.find(meta => meta.key === 'style_with_handle_1')?.value
  const handle_2 = product.metafields?.find(meta => meta.key === 'style_with_handle_2')?.value

  return (
    <>
      {(handle_1 || handle_2) && (
        <div className={s.root}>
          <div className={s.wrapper}>
            <div className={s.productsContainer}>
              {handle_1 && <StyleWithCard handle={handle_1} />}
              {handle_2 && <StyleWithCard handle={handle_2} />}
            </div>
            <div className={s.caption}>style with</div>
          </div>
        </div>
      )}
    </>
  )
}

export default StyleWith

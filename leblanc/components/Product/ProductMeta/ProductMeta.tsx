import React, { FC, useState, useEffect } from 'react'
import s from './ProductMeta.module.css'
// components
import { QuantitySelector } from '@leblanc/components/ui'
import {
  AddToCart,
  StyleWith,
  ProductSizeSelector,
} from '@leblanc/components/Product'
import type { Product } from '@commerce/types/product'
import usePrice from '@commerce/product/use-price'
import { useAddItem } from '@framework/cart'
import {
  getProductVariant,
  selectDefaultOptionFromProduct,
  SelectedOptions,
} from '@components/product/helpers'

interface Props {
  product: Product
}

const ProductMeta: FC<Props> = ({ product }) => {
  const addItem = useAddItem()
  const [cartLoading, setCartLoading] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({})

  useEffect(() => {
    selectDefaultOptionFromProduct(product, setSelectedOptions)
  }, [product])

  const variant = getProductVariant(product, selectedOptions)
  const addToCart = async () => {
    setCartLoading(true)
    try {
      await addItem({
        productId: String(product.id),
        variantId: String(variant ? variant.id : product.variants[0].id),
      })
      // setCartOpen(true)
      setCartLoading(false)
    } catch (err) {
      setCartLoading(false)
      console.error
    }
  }

  const { price } = usePrice({
    amount: product.price.value,
    baseAmount: product.price.retailPrice,
    currencyCode: product.price.currencyCode!,
  })

  console.log(selectedOptions)

  return (
    <div className={s.root}>
      <div className={s.card}>
        <div className={s.details}>
          <h3 className={s.price}>{price}</h3>
          <div className={s.colorsContainer}>
            <button className={s.colorSwatch}></button>
            <button className={s.colorSwatch}></button>
          </div>
          <h1 className={s.title}>{product.name}</h1>
          <p className={s.shortDescription}>
            LEBLANCSTUDIOS’ black t-shirt is made of combed cotton with an oversized
            fit. Screen printed graphic with an embroidery in Lissajous in green.
          </p>
          <div className={s.centerContainer}>
            {product.options?.map(opt => (
              <>
                {opt.displayName.includes('size') && (
                  <ProductSizeSelector
                    option={opt}
                    selectedOptions={selectedOptions}
                    setSelectedOptions={setSelectedOptions}
                  />
                )}
              </>
            ))}
            <div className={s.quantityCol}>
              <div>
                <QuantitySelector />
              </div>
              <div>
                <button className={s.sizeGuideBtn}>Size Guide</button>
              </div>
            </div>
          </div>
        </div>
        <div className={s.buttonsContainer}>
          {variant && (
            <AddToCart
              addToCart={addToCart}
              variant={variant}
              loading={cartLoading}
              text="add to bag"
            />
          )}
          <div className={s.or}>or</div>
          <button className={s.fullButton}>steal from us</button>
        </div>
        <p className={s.fullDescription}>{product.description}</p>
      </div>
      <StyleWith />
    </div>
  )
}

export default ProductMeta

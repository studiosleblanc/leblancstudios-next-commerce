import React, { FC, useState, useEffect } from 'react'
import s from './ProductMeta.module.css'
import { QuantitySelector } from '@leblanc/components/ui'
import { AddToCart } from '@leblanc/components/Product'
import StyleWith from '../StyleWith'
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
  const [loading, setLoading] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({})

  useEffect(() => {
    selectDefaultOptionFromProduct(product, setSelectedOptions)
  }, [product])

  const variant = getProductVariant(product, selectedOptions)
  const addToCart = async () => {
    // setLoading(true)
    try {
      await addItem({
        productId: String(product.id),
        variantId: String(variant ? variant.id : product.variants[0].id),
      })
      // setCartOpen(true)
      // setLoading(false)
    } catch (err) {
      // setLoading(false)
    }
  }

  const { price } = usePrice({
    amount: product.price.value,
    baseAmount: product.price.retailPrice,
    currencyCode: product.price.currencyCode!,
  })

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
            <div className={s.sizesCol}>
              <div>
                <h4 className={s.sizeTitle}>Select Size:</h4>
                <ul className={s.sizesContainer}>
                  <li>
                    <button className={s.sizeSwatch}>xs</button>
                  </li>
                  <li>
                    <button className={s.sizeSwatch}>s</button>
                  </li>
                  <li>
                    <button className={s.sizeSwatch}>m</button>
                  </li>
                  <li>
                    <button className={s.sizeSwatch}>l</button>
                  </li>
                  <li>
                    <button className={s.sizeSwatch}>xl</button>
                  </li>
                  <li>
                    <button className={s.sizeSwatch}>xxl</button>
                  </li>
                </ul>
              </div>
              <div className={s.madeIn}>
                <p>
                  Made In Portugal <br /> 100% Cotton
                </p>
              </div>
            </div>
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
              loading={loading}
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

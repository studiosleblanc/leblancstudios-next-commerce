import React, { FC, useState, useEffect } from 'react'
import s from './ProductMeta.module.css'
// components
import { QuantitySelector } from '@leblanc/components/ui'
import {
  AddToCart,
  StyleWith,
  ProductSizeSelector,
  ProductColorSelector,
  ProductSpecs,
} from '@leblanc/components/Product'
import parse from 'html-react-parser'
import type { Product } from '@commerce/types/product'
import usePrice from '@commerce/product/use-price'
import { useAddItem } from '@framework/cart'
import { useUI } from '@components/ui'
import {
  getProductVariant,
  selectDefaultOptionFromProduct,
  SelectedOptions,
} from '@components/product/helpers'
import useProductMetafields from '@leblanc/hooks/useProductMetafields'

interface Props {
  product: Product
}

const ProductMeta: FC<Props> = ({ product }) => {
  const addItem = useAddItem()
  const { openSidebar, setSidebarView } = useUI()
  const [cartLoading, setCartLoading] = useState(false)
  const [quantity, setQuantity] = useState<number>(1)
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({})

  const shortDescription = useProductMetafields(
    product.metafields,
    'short_description'
  )

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
        quantity,
      })
      openSidebar()
      setSidebarView('CART_VIEW')
      setCartLoading(false)
    } catch (err) {
      setCartLoading(false)
      console.error(err)
    }
  }

  const { price } = usePrice({
    amount: product.price.value,
    baseAmount: product.price.retailPrice,
    currencyCode: product.price.currencyCode!,
  })

  const openMiniCart = () => {
    openSidebar()
  }

  return (
    <div className={s.root}>
      <div className={s.card}>
        <div className={s.details}>
          <h3 className={s.price}>{price}</h3>
          {product.options?.map(opt => (
            <React.Fragment key={opt.id}>
              {opt.displayName.includes('color') && (
                <ProductColorSelector
                  option={opt}
                  selectedOptions={selectedOptions}
                  setSelectedOptions={setSelectedOptions}
                  product={product}
                />
              )}
            </React.Fragment>
          ))}
          <h1 className={s.title}>{product.name}</h1>
          <p className={s.shortDescription}>{shortDescription}</p>
          <div className={s.centerContainer}>
            {product.options?.map(opt => (
              <React.Fragment key={opt.id}>
                {opt.displayName.includes('size') && (
                  <ProductSizeSelector
                    option={opt}
                    selectedOptions={selectedOptions}
                    setSelectedOptions={setSelectedOptions}
                  />
                )}
              </React.Fragment>
            ))}
            <div className={s.quantityCol}>
              <div>
                <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
              </div>
            </div>
          </div>
          <div className={s.bottomContainer}>
            <div>
              <ProductSpecs product={product} />
            </div>
            <div>
              <button className={s.sizeGuideBtn}>Size Guide</button>
            </div>
          </div>
        </div>
        <div className={s.buttonsContainer}>
          {process.env.COMMERCE_CART_ENABLED && variant && (
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
        <div className={s.fullDescription}>
          {parse(product?.descriptionHtml || '')}
        </div>
      </div>
      <StyleWith product={product} />
    </div>
  )
}

export default ProductMeta

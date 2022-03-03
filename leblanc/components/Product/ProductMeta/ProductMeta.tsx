import React, { FC, useState, useEffect } from 'react'
import s from './ProductMeta.module.css'
import cn from 'classnames'
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
// import useProductMetafields from '@leblanc/hooks/useProductMetafields'
import { Scrollbars } from 'react-custom-scrollbars-2'

interface Props {
  product: Product
  asCard?: boolean
}

const ProductMeta: FC<Props> = ({ product, asCard = false }) => {
  console.log(product)
  const addItem = useAddItem()
  const { openSidebar, setSidebarView } = useUI()
  const [cartLoading, setCartLoading] = useState(false)
  const [quantity, setQuantity] = useState<number>(1)
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({})

  const shortDescription  = product.metafields?.find(meta => meta.key === 'short_description')?.value

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
    <div className={cn(s.root, { [s.asCard]: asCard })}>
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
          <p className={s.shortDescription}>
            {shortDescription && shortDescription}
          </p>
          <div className={s.centerContainer}>
            <div className={s.quantityCol}>
              <div>
                <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
              </div>
            </div>
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
        {asCard ? (
          <Scrollbars
            autoHeight
            autoHeightMin={0}
            autoHeightMax="100%"
            style={{ height: '100%', width: '100%' }}
            className={s.scrolbars}>
            <div className={s.fullDescription}>
              {parse(product?.descriptionHtml || '')}
            </div>
          </Scrollbars>
        ) : (
          <div className={s.fullDescription}>
            {parse(product?.descriptionHtml || '')}
          </div>
        )}
      </div>
      {!asCard && <StyleWith product={product} />}
    </div>
  )
}

export default ProductMeta

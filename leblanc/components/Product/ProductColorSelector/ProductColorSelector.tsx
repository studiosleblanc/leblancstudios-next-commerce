import React, { FC, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import cn from 'classnames'
import s from './ProductColorSelector.module.css'
import type {
  Product,
  ProductOption,
  ProductOptionValues,
} from '@commerce/types/product'
import { SelectedOptions } from '@components/product/helpers'
import { setBgColor, setLabel } from '@leblanc/utils/colors'
import { getColoVariantsFromMetafields } from '@leblanc/utils/colorMetafields'
import { ProductBackdrop } from '@leblanc/components/Product'

interface Props {
  option: ProductOption
  selectedOptions: SelectedOptions
  setSelectedOptions: React.Dispatch<React.SetStateAction<SelectedOptions>>
  product: Product
}

const ProductColorSelector: FC<Props> = ({
  option,
  selectedOptions,
  setSelectedOptions,
  product,
}) => {
  const [backdrop, setBackdrop] = useState(false)
  const router = useRouter()
  const colorVariants = getColoVariantsFromMetafields(product?.metafields)

  const openBackdrop = (href: string) => {
    setBackdrop(true)
    router.push(href)
  }

  useEffect(() => {
    const handleRouteChange = () => {
      setBackdrop(false)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    // If the component is unmounted, unsubscribe
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return (
    <>
      <ul className={s.root}>
        {option.values &&
          option.values.map((v, i: number) => {
            const active = selectedOptions[option.displayName.toLowerCase()]
            return (
              <li key={`${option.id}-${v.label}-${i}`}>
                <button
                  // className={cn(s.colorSwatch, {
                  //   [s.active]: v.label.toLowerCase() === active,
                  // })}
                  className={s.colorSwatch}
                  style={{
                    backgroundColor: v.hexColors
                      ? setBgColor(v.hexColors)
                      : 'transparent',
                  }}
                  onClick={() => {
                    setSelectedOptions(selectedOptions => {
                      return {
                        ...selectedOptions,
                        [option.displayName.toLowerCase()]: v.label.toLowerCase(),
                      }
                    })
                  }}
                  aria-label={v.label.toLowerCase()}>
                  {/* {v.label.toLowerCase()} */}
                </button>
              </li>
            )
          })}

        {/* Metafiled color options */}
        {colorVariants &&
          colorVariants.map(opt => (
            <li key={opt.color}>
              <button
                className={s.colorSwatch}
                style={{
                  backgroundColor: opt.hexColors
                    ? setBgColor(opt.hexColors)
                    : 'transparent',
                }}
                onClick={() => openBackdrop(opt.page || '/')}
                aria-label={setLabel(opt.color || '')}>
                {opt.hexColors ? '' : setLabel(opt.color || '')}
              </button>
            </li>
          ))}
      </ul>
      <ProductBackdrop open={backdrop} />
    </>
  )
}

export default ProductColorSelector

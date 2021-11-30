import React, { FC } from 'react'
import cn from 'classnames'
import s from './ProductColorSelector.module.css'
import { ProductOption, ProductOptionValues } from '@commerce/types/product'
import { SelectedOptions } from '@components/product/helpers'
import { setBgColor, setLabel } from '@leblanc/utils/colors'

interface Props {
  option: ProductOption
  selectedOptions: SelectedOptions
  setSelectedOptions: React.Dispatch<React.SetStateAction<SelectedOptions>>
}

const ProductColorSelector: FC<Props> = ({
  option,
  selectedOptions,
  setSelectedOptions,
}) => {
  return (
    <ul className={s.root}>
      {option.values &&
        option.values.map((v, i: number) => {
          const active = selectedOptions[option.displayName.toLowerCase()]
          return (
            <li key={`${option.id}-${v.label}-${i}`}>
              <button
                className={cn(s.colorSwatch, {
                  [s.active]: v.label.toLowerCase() === active,
                })}
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
    </ul>
  )
}

export default ProductColorSelector

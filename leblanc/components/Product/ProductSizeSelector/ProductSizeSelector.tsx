import React, { FC } from 'react'
import cn from 'classnames'
import s from './ProductSizeSelector.module.css'
import { ProductOption, ProductOptionValues } from '@commerce/types/product'
import { SelectedOptions } from '@components/product/helpers'

interface Props {
  option: ProductOption
  selectedOptions: SelectedOptions
  setSelectedOptions: React.Dispatch<React.SetStateAction<SelectedOptions>>
}

const ProductSizeSelector: FC<Props> = ({
  option,
  selectedOptions,
  setSelectedOptions,
}) => {
  return (
    <div className={s.root}>
      <div>
        <h4 className={s.sizeTitle}>Select Size:</h4>
        <ul className={s.sizesContainer}>
          {option.values &&
            option.values.map((v, i: number) => {
              const active = selectedOptions[option.displayName.toLowerCase()]
              return (
                <li key={`${option.id}-${v.label}-${i}`}>
                  <button
                    className={cn(s.sizeSwatch, {
                      [s.active]: v.label.toLowerCase() === active,
                    })}
                    onClick={() => {
                      setSelectedOptions(selectedOptions => {
                        return {
                          ...selectedOptions,
                          [option.displayName.toLowerCase()]: v.label.toLowerCase(),
                        }
                      })
                    }}>
                    {v.label.toLowerCase()}
                  </button>
                </li>
              )
            })}
        </ul>
      </div>
      <div className={s.madeIn}>
        <p>
          Made In Portugal <br /> 100% Cotton
        </p>
      </div>
    </div>
  )
}

export default ProductSizeSelector

import React, { FC } from 'react'
import s from './SqueezeOut.module.css'
import ClickOutside from '@lib/click-outside'
import type { Product } from '@commerce/types/product'

interface Props {
  product: Product
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SqueezeOut: FC<Props> = ({ product, open, setOpen }) => {
  const handleClickOutside = () => {
    setOpen(false)
  }

  return (
    <>
      <ClickOutside active={open} onClick={handleClickOutside}>
        <div className={s.root}>{product.name}</div>
      </ClickOutside>
    </>
  )
}

export default SqueezeOut

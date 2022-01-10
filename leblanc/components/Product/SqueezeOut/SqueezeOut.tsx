import React, { FC } from 'react'
import s from './SqueezeOut.module.css'
import ClickOutside from '@lib/click-outside'
import type { Product } from '@commerce/types/product'
import { ProductMeta } from '..'
import { motion } from 'framer-motion'

interface Props {
  product: Product
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SqueezeOut: FC<Props> = ({ product, open, setOpen }) => {
  const handleClickOutside = () => {
    setOpen(false)
  }

  const cardAnimate = {
    enter: {
      opacity: 1,
      x: '100%',
      // transition: {
      //   duration: 0.5,
      // },
    },
    exit: {
      opacity: 0,
      x: '150%',
      // transition: {
      //   duration: 0.5,
      // },
    },
  }

  return (
    <>
      <ClickOutside active={open} onClick={handleClickOutside}>
        <motion.div
          className={s.root}
          initial="exit"
          animate={open ? 'enter' : 'exit'}
          variants={cardAnimate}
        >
          <ProductMeta product={product} asCard />
        </motion.div>
      </ClickOutside>
    </>
  )
}

export default SqueezeOut

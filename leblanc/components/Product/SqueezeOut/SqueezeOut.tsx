import React, { FC } from 'react'
import s from './SqueezeOut.module.css'
import ClickOutside from '@lib/click-outside'
import type { Product } from '@commerce/types/product'
import { ProductMeta } from '..'
import { motion } from 'framer-motion'
import { VscClose } from 'react-icons/vsc'

interface Props {
  product: Product
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  i: number
}

const SqueezeOut: FC<Props> = ({ product, open, setOpen, i }) => {
  const closeSqueezeOut = () => {
    setOpen(false)
  }

  const cardRightAnimate = {
    enter: {
      opacity: 1,
      x: '100%',
    },
    exit: {
      opacity: 0,
      x: '140%',
    },
  }
  const cardLeftAnimate = {
    enter: {
      opacity: 1,
      x: '-100%',
    },
    exit: {
      opacity: 0,
      x: '-140%',
    },
  }

  console.log(i)

  return (
    <ClickOutside active={open} onClick={closeSqueezeOut}>
      <motion.div
        className={s.root}
        initial="exit"
        animate={open ? 'enter' : 'exit'}
        variants={(i + 1) % 3 === 0 ? cardLeftAnimate : cardRightAnimate}>
        <div className={s.cardWrapper}>
          <button className={s.closeButton} onClick={closeSqueezeOut} aria-label="close squeeze out">
            <VscClose size={18} className={s.navItemChevron} />
          </button>
          <ProductMeta product={product} asCard />
        </div>
      </motion.div>
    </ClickOutside>
  )
}

export default SqueezeOut

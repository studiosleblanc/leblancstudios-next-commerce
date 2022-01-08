import React, { FC } from 'react'
// import cn from 'classnames'
import s from './ProductBackdrop.module.css'
import { useTheme } from 'next-themes'

interface Props {
  open: boolean
}

const ProductBackdrop: FC<Props> = ({ open }) => {
  const { theme } = useTheme()
  const bgColor = theme === 'light' ? '#fff' : '#000'
  return open ? <div className={s.root} style={{ background: bgColor }}></div> : null
}

export default ProductBackdrop

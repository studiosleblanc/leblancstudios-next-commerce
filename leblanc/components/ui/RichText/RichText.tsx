import React, { FC } from 'react'
import cn from 'classnames'
import s from './RichText.module.css'

interface Props {
  children: React.ReactNode
  uppercase?: boolean
  centered?: boolean 
}

const RichText: FC<Props> = ({ children, uppercase, centered }) => {
  return <div className={cn(s.root, { uppercase: uppercase, "text-center": true })}>{children}</div>
}

export default RichText

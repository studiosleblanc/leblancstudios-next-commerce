import React, { FC } from 'react'
import cn from 'classnames'
import s from './RichText.module.css'

interface Props {
  children: React.ReactNode
  uppercase: boolean
}

const RichText: FC<Props> = ({ children, uppercase }) => {
  return <div className={cn(s.root, { uppercase: uppercase })}>{children}</div>
}

export default RichText

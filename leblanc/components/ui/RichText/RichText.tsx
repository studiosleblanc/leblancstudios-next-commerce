import React, { FC } from 'react'
import s from './RichText.module.css'

interface Props {
  children: React.ReactNode
}

const RichText: FC<Props> = ({ children }) => {
  return <div className={s.root}>{children}</div>
}

export default RichText

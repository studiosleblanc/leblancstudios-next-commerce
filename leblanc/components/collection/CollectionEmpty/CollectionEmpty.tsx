import React, { FC } from 'react'
import s from './CollectionEmpty.module.css'

interface Props {
  text: string
}

const CollectionEmpty: FC<Props> = ({ text }) => {
  return (
    <div className={s.root}>
      <span>{text}</span>
    </div>
  )
}

export default CollectionEmpty

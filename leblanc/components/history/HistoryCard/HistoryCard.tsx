import React, { FC } from 'react'
import cn from 'classnames'
import s from './HistoryCard.module.css'

interface Props {
  children: React.ReactNode
  className?: string
}

const HistoryCard: FC<Props> = ({ children, className }) => {
  const rootClass = className ? cn(s.root, className) : s.root
  return <div className={rootClass}>{children}</div>
}

export default HistoryCard

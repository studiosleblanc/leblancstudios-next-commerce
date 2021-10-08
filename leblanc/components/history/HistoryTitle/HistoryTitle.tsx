import React, { FC } from 'react'
import cn from 'classnames'
import s from './HistoryTitle.module.css'

interface Props {
  children: React.ReactNode
  className?: string
}

const HistoryTitle: FC<Props> = ({ children, className }) => {
  const rootClass = className ? cn(s.root, className) : s.root
  return (
    <div className={rootClass}>
      <h2>{children}</h2>
    </div>
  )
}

export default HistoryTitle

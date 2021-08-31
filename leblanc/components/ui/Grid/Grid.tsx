import React, { FC } from 'react'
import cn from 'classnames'
import s from 'Grid.module.css'

interface Props {
  children?: React.ReactNode
  className?: string
}

const Grid: FC<Props> = ({ className, children }) => {
  let rootClass = cn(s.root, className)
  return <div className={rootClass}>{children}</div>
}

export default Grid

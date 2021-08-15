import React, { FC } from 'react'
import cn from 'classnames'
import s from './Tooltip.module.css'

interface TooltipProps {
  className?: string
  align?: 'left' | 'right'
  top?: string | number
  bottom?: string | number
  left?: string | number
  right?: string | number
  text?: string
  width?: string | number
}

const Tooltip: FC<TooltipProps> = ({
  className,
  text,
  align = 'left',
  top = 'auto',
  bottom = 'auto',
  left = 'auto',
  right = 'auto',
  width = ' auto',
}) => {
  return (
    <div
      style={{ top, bottom, left, right, width }}
      className={cn(s.root, className)}>
      <div className={s.tooltipLine}></div>
      <span
        className={cn(
          s.tooltipText,
          { 'text-left': align === 'left' },
          { 'text-right': align === 'right' }
        )}>
        {text}
      </span>
    </div>
  )
}

export default Tooltip

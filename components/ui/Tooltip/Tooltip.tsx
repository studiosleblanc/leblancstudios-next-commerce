import React, { FC } from 'react'
import cn from 'classnames'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
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
  const [ref, inView] = useInView({ triggerOnce: true })
  return (
    <div
      style={{ top, bottom, left, right, width }}
      className={cn(
        s.root,
        className,
        { 'text-left': align === 'right' },
        { 'text-right': align === 'left' }
      )}>
      <motion.div
        ref={ref}
        className={s.tooltipLine}
        // initial={{ width: 0 }}
        animate={{ width: inView ? '100%' : 0 }}
        transition={{ duration: 1 }}
      />
      <motion.span
        ref={ref}
        className={cn(
          s.tooltipText,
          { 'text-left': align === 'left' },
          { 'text-right': align === 'right' }
        )}
        // initial={{ height: 0 }}
        animate={{ height: inView ? 'auto' : 0 }}
        transition={{ delay: 1, duration: 0.5 }}>
        {text}
      </motion.span>
    </div>
  )
}

export default Tooltip

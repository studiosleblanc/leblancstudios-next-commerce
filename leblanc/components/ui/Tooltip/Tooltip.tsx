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
  appear: boolean
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
  appear = false,
}) => {
  const [ref, inView] = useInView({ triggerOnce: true })

  const tooltipLineAnimate = {
    enter: {
      width: '100%',
    },
    hidden: {
      width: 0,
    },
  }
  const tooltipTextAnimate = {
    enter: {
      height: 'auto',
      opacity: 1,
    },
    hidden: {
      height: 0,
      opacity: 0,
    },
  }

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
        initial="hidden"
        animate={inView && appear ? 'enter' : 'hidden'}
        variants={tooltipLineAnimate}
        transition={{ delay: 0.5, duration: 1 }}
      />
      <motion.span
        ref={ref}
        className={cn(
          s.tooltipText,
          { 'text-left': align === 'left' },
          { 'text-right': align === 'right' }
        )}
        initial="hidden"
        animate={inView && appear ? 'enter' : 'hidden'}
        variants={tooltipTextAnimate}
        transition={{ delay: 1.5, duration: 0.5 }}>
        {text}
      </motion.span>
    </div>
  )
}

export default Tooltip

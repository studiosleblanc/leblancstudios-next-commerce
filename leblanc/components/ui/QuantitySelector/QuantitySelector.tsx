import React from 'react'
import cn from 'classnames'
import s from './QuantitySelector.module.css'

const QuantitySelector = () => {
  return (
    <div className={s.root}>
      <button className={cn(s.button, s.incrementBtn)}>+</button>
      <div className={cn(s.counter)}>1</div>
      <button className={cn(s.button, s.decrementBtn)}>-</button>
    </div>
  )
}

export default QuantitySelector

import React, { FC } from 'react'
import cn from 'classnames'
import s from './QuantitySelector.module.css'

interface Props {
  quantity: number
  setQuantity: React.Dispatch<React.SetStateAction<number>>
}

const QuantitySelector: FC<Props> = ({ quantity, setQuantity }) => {
  const increment = () => quantity < 5 && setQuantity(q => ++q)

  const decrement = () => quantity > 1 && setQuantity(q => --q)

  return (
    <div className={s.root}>
      <button onClick={increment} className={cn(s.button, s.incrementBtn)}>
        +
      </button>
      <div className={cn(s.counter)}>{quantity}</div>
      <button onClick={decrement} className={cn(s.button, s.decrementBtn)}>
        -
      </button>
    </div>
  )
}

export default QuantitySelector

import React, { FC } from 'react'

interface Props {
  width?: string | number
  className?: string
}

const CartIcon: FC<Props> = ({ width }) => {
  return (
    <svg
      width={width || '100%'}
      height="auto"
      viewBox="0 0 34 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.187 25L1.747 9h30.597l-8.441 16H10.187zM9.679 9c2.334-6.037 8.55-14.489 14.732 0"
        stroke="#000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default CartIcon

import React, { FC } from 'react'

interface Props {
  width?: string | number
  className?: string
}

const MenuIcon: FC<Props> = ({ width, ...props }) => {
  return (
    <svg
      width={width || '100%'}
      height="100%"
      viewBox="0 0 9 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path d="M0 1H9" stroke="black" stroke-width="0.3" />
      <path d="M0 4H9" stroke="black" stroke-width="0.3" />
      <path d="M0 7H9" stroke="black" stroke-width="0.3" />
    </svg>
  )
}

export default MenuIcon

import React, { FC } from 'react'

interface Props {
  className?: string
}

const ChevronLeft: FC<Props> = ({ ...props }) => {
  return (
    <svg
      width="44"
      height="151"
      viewBox="0 0 44 151"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M42 149L2 75.5 42 2"
        stroke="#272727"
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>
  )
}

export default ChevronLeft

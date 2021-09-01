import React, { FC } from 'react'

interface Props {
  className?: string
}

const ChevronRight: FC<Props> = ({ ...props }) => {
  return (
    <svg
      width="44"
      height="151"
      viewBox="0 0 44 151"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M2 2l40 73.5L2 149"
        stroke="#272727"
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>
  )
}

export default ChevronRight

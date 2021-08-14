import React, { FC } from 'react'

const Search: FC = props => {
  return (
    <svg
      width="17"
      height="16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <circle cx="6.165" cy="6.165" r="5.665" stroke="#000" />
      <path
        d="M9.8 10.275l6.166 5.138"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Search

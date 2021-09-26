import React from 'react'
import { useRouter } from 'next/router'

const NACollection = () => {
  const router = useRouter()
  const items = router.query
  console.log(items)
  return (
    <div>
      <ul className="text-2xl">
        <li>pathname: {router.pathname}</li>
        <li>asPath: {router.asPath}</li>
        <li>collection: {items.collection}</li>
        <li>sub-collection: {items.subcollection}</li>
      </ul>
    </div>
  )
}

export default NACollection

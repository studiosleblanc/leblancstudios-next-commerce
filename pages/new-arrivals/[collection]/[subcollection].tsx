import React from 'react'
import { useRouter } from 'next/router'
import { MainLayout } from '@leblanc/layouts'

const NACollection = () => {
  const router = useRouter()
  const items = router.query
  // console.log(items)
  return (
    <MainLayout>
      <ul className="text-2xl">
        <li>pathname: {router.pathname}</li>
        <li>asPath: {router.asPath}</li>
        <li>collection: {items.collection}</li>
        <li>sub-collection: {items.subcollection}</li>
      </ul>
    </MainLayout>
  )
}

export default NACollection

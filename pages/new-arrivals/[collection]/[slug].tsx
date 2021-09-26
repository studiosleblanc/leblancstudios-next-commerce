import React from 'react'
import { useRouter } from 'next/router'

const NACollection = () => {
  const router = useRouter()
  const items = router.query
  console.log(items)
  return <div>na colleciton</div>
}

export default NACollection

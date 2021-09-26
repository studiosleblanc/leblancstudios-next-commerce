import { getSearchStaticProps } from '@lib/search-props'
import type { GetStaticPathsResult, GetStaticPropsContext } from 'next'
import { CollectionView } from '@leblanc/views'

export async function getStaticProps(context: GetStaticPropsContext) {
  return getSearchStaticProps(context)
}

export function getStaticPaths(): GetStaticPathsResult {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export default CollectionView

// import React from 'react'
// import { useRouter } from 'next/router'

// const NACollection = () => {
//   const router = useRouter()
//   const items = router.query
//   console.log(items)
//   return (
//     <div>
//       <ul className="text-2xl">
//         <li>pathname: {router.pathname}</li>
//         <li>asPath: {router.asPath}</li>
//         <li>collection: {items.collection}</li>
//         <li>handle: {items.handle}</li>
//       </ul>
//     </div>
//   )
// }

// export default NACollection

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
// import { MainLayout } from '@leblanc/layouts'

// const NACollection = () => {
//   const router = useRouter()
//   const items = router.query
//   // console.log(items)
//   return (
//     <MainLayout>
//       <ul className="text-2xl">
//         <li>pathname: {router.pathname}</li>
//         <li>asPath: {router.asPath}</li>
//         <li>collection: {items.collection}</li>
//         <li>sub-collection: {items.subcollection}</li>
//       </ul>
//     </MainLayout>
//   )
// }

// export default NACollection

import { getSearchStaticProps } from '@lib/search-props'
import type { GetStaticPathsResult, GetStaticPropsContext } from 'next'
import ArchivesView from '@leblanc/views/ArchivesView'
import { Layout } from '@leblanc/layouts'

export async function getStaticProps(context: GetStaticPropsContext) {
  return getSearchStaticProps(context)
}

export function getStaticPaths(): GetStaticPathsResult {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export default function History() {
  return <ArchivesView />
}

History.Layout = Layout

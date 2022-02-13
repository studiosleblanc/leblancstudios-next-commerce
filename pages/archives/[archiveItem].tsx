import { getSearchStaticProps } from '@lib/search-props'
import type { GetStaticPropsContext } from 'next'
import ArchivesView from '@leblanc/views/ArchivesView'
import { Layout } from '@leblanc/layouts'

export async function getStaticProps(context: GetStaticPropsContext) {
  return getSearchStaticProps(context)
}
export default function History() {
  return <ArchivesView />
}

History.Layout = Layout

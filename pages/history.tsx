import { getSearchStaticProps } from '@lib/search-props'
import type { GetStaticPropsContext } from 'next'
import HistoryView from '@leblanc/views/HistoryView'
import { Layout } from '@leblanc/layouts'

export async function getStaticProps(context: GetStaticPropsContext) {
  return getSearchStaticProps(context)
}
export default function History() {
  return <HistoryView />
}

History.theme = 'dark'
History.Layout = Layout

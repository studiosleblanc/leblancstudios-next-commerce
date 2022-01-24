import { getSearchStaticProps } from '@lib/search-props'
import type { GetStaticPropsContext } from 'next'
import { Layout } from '@leblanc/layouts'
import { ComingSoon } from '@leblanc/components/ui'

export async function getStaticProps(context: GetStaticPropsContext) {
  return getSearchStaticProps(context)
}
export default function History() {
  return <ComingSoon />
}

History.Layout = Layout

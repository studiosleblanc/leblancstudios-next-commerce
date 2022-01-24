import { getSearchStaticProps } from '@lib/search-props'
import type { GetStaticPropsContext } from 'next'
import { Layout } from '@leblanc/layouts'
import { ShippingReturnsView } from '@leblanc/views'

export async function getStaticProps(context: GetStaticPropsContext) {
  return getSearchStaticProps(context)
}
export default function History() {
  return <ShippingReturnsView />
}

History.Layout = Layout

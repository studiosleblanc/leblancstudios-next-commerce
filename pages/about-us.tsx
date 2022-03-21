import { getSearchStaticProps } from '@lib/search-props'
import type { GetStaticPropsContext } from 'next'
import { Layout } from '@leblanc/layouts'
import { AboutUsView } from '@leblanc/views'

export async function getStaticProps(context: GetStaticPropsContext) {
  return getSearchStaticProps(context)
}
export default function AboutUs() {
  return <AboutUsView />
}

AboutUs.Layout = Layout

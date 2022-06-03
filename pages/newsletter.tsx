import { MainLayout } from '@leblanc/layouts'
import { getSearchStaticProps } from '@lib/search-props'
import type { GetStaticPropsContext } from 'next'
import { Layout } from '@leblanc/layouts'
import Content from 'components/newsletter'
export async function getStaticProps(context: GetStaticPropsContext) {
  return getSearchStaticProps(context)
}
function Newsletter(): JSX.Element {
  return (
    <MainLayout>
      <Content />
    </MainLayout>
  )
}
Newsletter.Layout = Layout

export default Newsletter

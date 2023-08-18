import { getSearchStaticProps } from '@lib/search-props'
import type { GetStaticPropsContext } from 'next'
import { Layout } from '@leblanc/layouts'
import GlossaryView from '@leblanc/views/GlossaryView/GlossaryView'

export async function getStaticProps(context: GetStaticPropsContext) {
  return getSearchStaticProps(context)
}
export default function Glossary() {
  return <GlossaryView />
}

// History.theme = 'dark'
Glossary.Layout = Layout

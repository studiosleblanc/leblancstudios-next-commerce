import { getSearchStaticProps } from '@lib/search-props'
import type {
  GetStaticPathsResult,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next'
import ArchivesView from '@leblanc/views/ArchivesView'
import { Layout } from '@leblanc/layouts'
import type { Archive, ArchiveImage } from '@leblanc/data/archives'
import { archivesData } from '@leblanc/data/archives'

export async function getStaticProps({
  params,
  locale,
  locales,
  preview,
}: GetStaticPropsContext<{ archiveHandle: string }>) {
  // return getSearchStaticProps(context)

  const archive = archivesData.find(
    (archive: Archive) => archive.handle === params?.archiveHandle
  )
  // console.log(archive)

  if (!archive) {
    throw new Error(`Archive with handle '${params!.archiveHandle}' not found`)
  }

  return {
    props: {
      archive,
    },
    revalidate: 200,
  }
}

export function getStaticPaths(): GetStaticPathsResult {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export default function History({
  archive,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // console.log(archive)
  return <ArchivesView archive={archive} />
}

History.Layout = Layout

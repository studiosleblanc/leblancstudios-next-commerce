import commerce from '@lib/api/commerce'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
// import { ProductCard } from '@components/product'
// import { Grid, Marquee, Hero } from '@components/ui'
// import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import { Layout, MainLayout } from '@leblanc/layouts'
import Popup from '@components/newsletter/popup'
import {
  Hero,
  MenWomen,
  FeaturedCollection,
  ArchivesSlider,
  ANecessaryRisk,
} from '@leblanc/components/home'
import HomeCollection from '@leblanc/components/home/HomeCollection'
import { Navbar } from '@components/common'
import { Header } from '@leblanc/components/common'
import NewHeader from '@components/common/NewHeader'
import { Banners } from '@leblanc/components/home/Banners/Banners'

export async function getStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales }
  // const productsPromise = commerce.getAllProducts({
  //   variables: { first: 6 },
  //   config,
  //   preview,
  //   // Saleor provider only
  //   ...({ featured: true } as any),
  // })
  const pagesPromise = commerce.getAllPages({ config, preview })
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })
  // const { products } = await productsPromise
  const { pages } = await pagesPromise
  const { categories, brands } = await siteInfoPromise

  return {
    props: {
      // products,
      categories,
      brands,
      pages,
    },
    revalidate: 60,
  }
}

export default function Home({
  // products,
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <MainLayout noHeader noDMSwitcher>
        <NewHeader />
        <Hero />
        <HomeCollection categories={categories} />
        <Banners />
        <ANecessaryRisk />

        <Popup />
      </MainLayout>
    </>
  )
}

Home.theme = 'light'
Home.Layout = Layout

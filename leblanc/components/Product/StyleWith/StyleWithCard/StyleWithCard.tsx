import React, { FC } from 'react'
import s from './StyleWithCard.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import useSearch from '@framework/product/use-search'

interface Props {
  handle: string
}

const StyleWithCard: FC<Props> = ({ handle }) => {
  const router = useRouter()
  const { locale } = router
  const { data, isLoading } = useSearch({
    search: handle,
    locale,
  })
  console.log(data)
  return (
    <div className={s.root}>
      {data?.found && (
        <Link href={`/product/${handle}`}>
          <a>
            <div className={s.productImage}>
              <Image
                width={data.products[0].images[0].width}
                height={data.products[0].images[0].height}
                src={data.products[0].images[0].url}
                alt={data.products[0].images[0].altText}
                objectFit="cover"
              />
            </div>
          </a>
        </Link>
      )}
    </div>
  )
}

export default StyleWithCard

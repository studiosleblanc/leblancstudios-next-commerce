import React, { FC } from 'react'
import s from './ArchivesView.module.css'
import cn from 'classnames'
import { MainLayout } from '@leblanc/layouts'
import type { Archive } from '@leblanc/data/archives'

interface Props {
  archive: Archive
}

const ArchivesView: FC<Props> = ({ archive }) => {
  // if (!archive) {
  //   return null
  // }

  return (
    <MainLayout>
      <div className={cn(s.headingSection, s.container)}>
        <div className={s.headingRow}>
          <h1 className={s.title}>{archive.name}</h1>
          <h1 className={s.shortText}>{archive.shortText}</h1>
        </div>
        <div className={s.richText}>{archive.richText}</div>
      </div>
      <div className={s.slideshowSection}></div>
      <div className={s.bigAbbrSection}></div>
      <div className={s.gallerySection}></div>
    </MainLayout>
  )
}

export default ArchivesView

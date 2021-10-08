import React from 'react'
import cn from 'classnames'
import Image from 'next/image'
import s from 'HitorySectionA.module.css'

const HistorySectionA = () => {
  return (
    <div className={cn(s.section, s.section1)}>
      <div className={s.title}>
        <h2>
          <b>LEBLANCSTUDIOS</b> IS A CULTURAL AGITATOR COMMITED TO PRODUCE CULTURE,
          HISTORY AND FUTURE THROUGH FASHION AND OTHER MEDIUMS FOUNDED IN THE
          DOMINICAN REPUBLIC 2014 ANGELO BEATO & YAMIL ARBAJE.
        </h2>
      </div>
      <div className={s.cardImage}>
        <div className={s.imgContainer}>
          <Image
            src="/assets/history/history-1.jpg"
            width={1762}
            height={1570}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  )
}

export default HistorySectionA

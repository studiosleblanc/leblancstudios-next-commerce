import React from 'react'
import { HeaderLogos } from '..'
import s from './HeaderMobile.module.css'

const HeaderMobile = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.root}>
        <div className={s.leftCol}>
          <HeaderLogos />
        </div>
        <div className={s.rightCol}>toolbar</div>
      </div>
    </div>
  )
}

export default HeaderMobile

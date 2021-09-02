import React from 'react'
import s from './ProductMeta.module.css'

const ProductMeta = () => {
  return (
    <div className={s.root}>
      <div className={s.card}>
        <div className={s.details}>
          <h3 className={s.price}>$175</h3>
          <div className={s.colorsContainer}>
            <button className={s.colorSwatch}></button>
            <button className={s.colorSwatch}></button>
          </div>
          <h1 className={s.title}>Black World Mass Observers T-Shirt</h1>
          <p className={s.shortDescription}>
            LEBLANCSTUDIOS’ black t-shirt is made of combed cotton with an oversized
            fit. Screen printed graphic with an embroidery in Lissajous in green.
          </p>
          <div className={s.centerContainer}>
            <div className={s.sizesCol}>
              <div>
                <h4 className={s.sizeTitle}>Select Size:</h4>
                <ul className={s.sizesContainer}>
                  <li>
                    <button className={s.sizeSwatch}>xs</button>
                  </li>
                  <li>
                    <button className={s.sizeSwatch}>s</button>
                  </li>
                  <li>
                    <button className={s.sizeSwatch}>m</button>
                  </li>
                  <li>
                    <button className={s.sizeSwatch}>l</button>
                  </li>
                  <li>
                    <button className={s.sizeSwatch}>xl</button>
                  </li>
                  <li>
                    <button className={s.sizeSwatch}>xxl</button>
                  </li>
                </ul>
              </div>
              <div className={s.madeIn}>
                <p>
                  Made In Portugal <br /> 100% Cotton
                </p>
              </div>
            </div>
            <div className={s.quantityCol}>
              <div>quantity selector</div>
              <button className={s.sizeGuideBtn}>Size Guide</button>
            </div>
          </div>
        </div>
        <div className={s.buttonsContainer}>
          <button className={s.fullButton}>add to bag</button>
          <div className={s.or}>or</div>
          <button className={s.fullButton}>steal from us</button>
        </div>
        <p className={s.fullDescription}>
          World Mass Observers t-shirt belongs to our latest collection No Medium
          Inserted F/W 2022, presented at the Dominican Republic. It features and
          reassambles the story of LEBLANCSTUDIOS a movement founded by two kids in
          the 2014. The Mass-Observation project of United Kingdom which conducted a
          series of human behaviour at work, on the street and many public spaces. We
          use this graphic as an analogy of how nowadays we are being watched and
          tracked by big corporations, same as The Mass-Observation Project did in
          the 1937-1960 with paid investigators and anonymously recording
          conversations.
        </p>
      </div>
      <div className={s.recomendations}>
        <div>
          <div>product 1</div>
          <div>product 2</div>
        </div>
        <div>style with</div>
      </div>
    </div>
  )
}

export default ProductMeta

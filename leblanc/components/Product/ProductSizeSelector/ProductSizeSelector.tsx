import React from 'react'
import s from './ProductSizeSelector.module.css'

const ProductSizeSelector = () => {
  return (
    <div className={s.root}>
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
  )
}

export default ProductSizeSelector

import React from 'react'
import './shop.scss'

function Shop() {
  return (
    <div className="shop">
      <div className="deal">
        <h1 className="title">GOOD4ME DEAL</h1>
        <div className="rectangle"></div>
        <p className="subtitle">
          Pick your beauty products today. 50% OFF on the most popular GOOD4ME.
          Order all classy products today!
        </p>
      </div>

      <div className="shop-vitamins">
        <div className="startshops">
          <div className="bigreactangle">
            <img src="./assets/vitamin1.png" alt="" className="multi" />
          </div>
          <p className="desc">MULTI-VITAMIN: EVERYDAY WELLNESS</p>
        </div>
        <div className="startshops">
          <img src="./assets/vitamin2.png" alt="" />

          <p className="desc">FULL RANGE VALUE PACK (SAVE 33%)</p>
        </div>
        <div className="startshops">
          <div className="bigreactangle">
            <img src="./assets/vitamin3.png" alt="" className="multi" />
          </div>
          <p className="desc">VITAMIN C: IMMUNITY SUPPORT </p>
        </div>
        <div className="startshops">
          <img src="./assets/vitamin4.png" alt="" className="onlyscreen" />

          <p className="desc">IRON: ENERGY SUPPORT</p>
        </div>
      </div>
    </div>
  )
}

export default Shop

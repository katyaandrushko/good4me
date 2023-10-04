import React from 'react'
import './shopall.scss'

function Shopall() {
  return (
    <div className="shopall">
      <div className="deal">
        <h1 className="title">SHOP ALL</h1>
      </div>

      <div className="shop-vitamins">
        <div className="startshops">
          <div className="bigreactangle">
            <img src="./assets/shopall1.png" alt="" className="multi" />
          </div>
          <p className="desc">DETOX + BLOAT SUPPORT VALUE PACK </p>
          <div className="price">
            <p className="newprice">$39.95 NZD</p>
            <p className="oldprice">$199.75 NZD</p>
          </div>
        </div>
        <div className="startshops">
          <div className="bigreactangle">
            <img src="./assets/shopall2.png" alt="" className="multi" />
          </div>
          <p className="desc">PROBIOTICS: GUT HEALTH + BLOAT SUPPORT</p>
          <div className="price">
            <p className="newprice">$39.95 NZD</p>
            <p className="oldprice">$199.75 NZD</p>
          </div>
        </div>
        <div className="startshops">
          <img src="./assets/shopall3.png" alt="" />
          <p className="desc">
            **PRE-ORDER** HAIR, SKIN & NAILS (5 MONTH SUPPLY)
          </p>
          <div className="price">
            <p className="newprice">$39.95 NZD</p>
            <p className="oldprice">$199.75 NZD</p>
          </div>
        </div>

        <div className="startshops">
          <img src="./assets/shopall4.png" alt="" className="onlyscreen" />

          <p className="desc">APPLE CIDER VINEGAR</p>
          <div className="price">
            <p className="newprice">$39.95 NZD</p>
            <p className="oldprice">$199.75 NZD</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shopall

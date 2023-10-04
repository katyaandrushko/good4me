import React from 'react'
import './products.scss'

function Products() {
  return (
    <div className="products">
      <div className="deal">
        <h1 className="title">OUR PRODUCTS ARE</h1>
      </div>

      <div className="shop-vitamins">
        <div className="startshops">
          <img src="./assets/product1.png" alt="" />
          <p className="desc">MULTI-VITAMIN (3 MONTH SUPPLY)</p>
          <div className="price">
            <p className="newprice">$39.95 NZD</p>
            <p className="oldprice">$199.75 NZD</p>
          </div>
        </div>
        <div className="startshops">
          <div className="bigreactangle">
            <img src="./assets/product2.png" alt="" className="multi" />
          </div>
          <p className="desc">VITAMIN C: IMMUNITY SUPPORT </p>
          <div className="price">
            <p className="newprice">$39.95 NZD</p>
            <p className="oldprice">$199.75 NZD</p>
          </div>
        </div>
        <div className="startshops">
          <div className="bigreactangle">
            <img src="./assets/vitamin1.png" alt="" className="multi" />
          </div>
          <p className="desc">MULTI-VITAMIN (3 MONTH SUPPLY)</p>
          <div className="price">
            <p className="newprice">$39.95 NZD</p>
            <p className="oldprice">$199.75 NZD</p>
          </div>
        </div>
        <div className="startshops">
          <img src="./assets/product4.png" alt="" className="onlyscreen" />

          <p className="desc">APPLE CIDER VINEGAR (3 MONTH SUPPLY)T</p>
          <div className="price">
            <p className="newprice">$39.95 NZD</p>
            <p className="oldprice">$199.75 NZD</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products

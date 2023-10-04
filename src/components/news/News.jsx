import React from 'react'
import './news.scss'

function News() {
  return (
    <div className="news">
      <h1 className="maintitle">LATEST NEWS</h1>

      <div className="latestnews">
        <div className="news">
          <img src="./assets/news1.png" alt="" className="newspict" />

          <p className="data">August 20, 2023</p>
          <h1 className="title">WE DONATE ONE WEEKS SUPPLY </h1>
          <p className="desc">
            We care about New Zealand children, and we want to support our
            community by providing our children in need with necessary vitamins
            to improve....
          </p>
          <button className="btn">Read more</button>
        </div>
        <div className="news">
          <img src="./assets/news2.png" alt="" className="newspict" />

          <p className="data">August 26, 2023</p>
          <h1 className="title">WE DONATE ONE WEEKS SUPPLY</h1>
          <p className="desc">
            We care about New Zealand children, and we want to support our
            community by providing our children in need with necessary vitamins
            to improve....
          </p>
          <button className="btn">Read more</button>
        </div>

        <div className="news">
          <img src="./assets/news3.png" alt="" className="newspict" />
          <p className="data">August 30, 2023</p>
          <h1 className="title">WE DONATE ONE WEEKS SUPPLY</h1>
          <p className="desc">
            We care about New Zealand children, and we want to support our
            community by providing our children in need with necessary vitamins
            to improve....
          </p>
          <button className="btn">Read more</button>
        </div>
      </div>
    </div>
  )
}

export default News

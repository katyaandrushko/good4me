import React from 'react'
import './home.scss'

function Home() {
  return (
    <div className="home">
      <div className="leftside">
        <div className="slideshow">
          <img src="./assets/slidershow.png" alt="" />
        </div>
        <div className="mainphoto">
          <img src="./assets/mainphoto.png" alt="" />
          <div className="textright">
            <h4 className="good4me">Good4Me</h4>
            <h1 className="title">Apple Cider Vinegar</h1>
            <p className="subtitle">
              Good4Me Apple Cider Vinegar gummies are the newest addition to
              your <br />
              morning health and well-being regime.
            </p>
            <button className="btn">SHOP NOW</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

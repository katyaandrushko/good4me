import React from 'react'
import './testimonials.scss'

function Testimonials() {
  return (
    <div className="testimonials">
      <div className="mainpage">
        <div className="mainphoto1">
          <div className="slideshow1">
            <img src="./assets/slidershow.png" alt="" />
          </div>
          <div className="slideshow2">
            <img src="./assets/slidershow2.png" alt="" />
          </div>
          <img src="./assets/mainphototest.png" alt="" />

          <div className="insidepict">
            <div className="leftside">
              <h3 className="title">REAL REVIEWS</h3>
              <h1 className="subtitle">REAL RESULTS</h1>
              <div className="stars">
                <img src="./assets/star1.png" alt="" />
                <img src="./assets/star1.png" alt="" />
                <img src="./assets/star1.png" alt="" />
                <img src="./assets/star1.png" alt="" />
                <img src="./assets/star5.png" alt="" />
              </div>
              <p className="desctesti">
                “We have perfected our formulas over time, based on your
                feedback. Check out hundreds of reviews on our website.We can't
                wait until you are a part of our Good4Me Family.”
              </p>
              <p className="author">_Chloe H.</p>
            </div>
            <div className="rightside">
              <img src="./assets/phototestimon.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials

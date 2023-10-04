import React from 'react'
import './control.scss'

function Control() {
  return (
    // <div className="control">
    <div className="containercon">
      <div className="rectanglebig">
        {/* <div className="leftside"> */}
        <div className="textcon">
          <h1 className="titlecon">TAKE CONTROL OF YOUR HEALTH</h1>
          <p className="subtitlecon">
            The Good4Me range has been formulated based on scientific &
            traditional evidence.
          </p>
          <p className="subtitlecon">
            Our vitamins are here and ready to boost your mood, immunity and
            overall well-being!
          </p>
          <p className="subtitlecon3">
            Made in New Zealand from local and imported ingredients.
          </p>
          <button className="btncon">BROWSE OUR RANGE</button>
          {/* </div> */}
        </div>

        {/* </div> */}

        <div className="righside">
          <div className="imagecon">
            <img src="./assets/woman1.png" alt="" className="womanthree" />
            <img src="./assets/woman3.png" alt="" className="womanone" />

            {/* <div className="thirdpict"> */}
            <img src="./assets/woman2.png" alt="" className="womantwo" />
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Control

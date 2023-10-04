import React from 'react'
import './section.scss'

function Section() {
  return (
    <div className="container">
      <div className="sections">
        <div className="sectionone">
          <div className="circle">
            <img src="./assets/sec1.png" alt="Plane" className="imgsec" />
          </div>
          <h5 className="titlesec">WORLDWIDE SHIPPING</h5>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetuer <br /> adipiscing elit.
            Aenean
          </p>
        </div>
        <div className="sectiontwo">
          <div className="circle">
            <img src="./assets/sec2.png" alt="Plane" className="imgsec" />
          </div>
          <h5 className="titlesec">30 DAYS GUARANTEE</h5>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetuer <br /> adipiscing elit.
            Aenean
          </p>
        </div>
        <div className="sectionthree">
          <div className="circle">
            <img src="./assets/sec3.png" alt="Plane" className="imgsec" />
          </div>
          <h5 className="titlesec">SECURED PAYMENTS</h5>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetuer <br />
            adipiscing elit. Aenean
          </p>
        </div>
      </div>
    </div>
  )
}

export default Section

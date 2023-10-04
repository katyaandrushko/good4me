import React from 'react'

import './footer.scss'
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footercontent">
          <div className="slideshow">
            <img src="./assets/slidershow1.png" alt="" />
          </div>
          <div className="mainphoto">
            <img src="./assets/footerpict.png" alt="" />
          </div>

          <div className="insidepict">
            <div className="leftside">
              <div className="textinsideleft">
                <div className="logoinfooter">
                  <img src="./assets/logo.png" alt="" />
                  <p className="desc">
                    Good health is important, so all of our products have been
                    carefully designed to bring out the best in you.
                  </p>
                </div>
              </div>
            </div>
            <div className="centerside">
              <div className="textinsidecenter">
                <h1 className="title">Keep In Touch</h1>
                <p className="desc">
                  Subscribe to receive new product updates, be the first to know
                  about sales, and more.
                </p>
                <div className="formgroup">
                  <input
                    className="form__field"
                    type="text"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
            </div>
            <div className="rightside">
              <div className="textinside">
                <h1 className="title">MORE INFO</h1>
                <div className="listinfoot">
                  <ul className="list">
                    <li>Shipping & Delivery</li>
                    <li>Refund Policy</li>
                    <li>Partner Program</li>
                    <li>Wholesale Portal</li>
                    <li>You Buy, We Donate</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

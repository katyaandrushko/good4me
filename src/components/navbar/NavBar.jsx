import React from 'react'
import './navbar.scss'

function NavBar() {
  return (
    <div className="container">
      <div className="under-nav">
        <p className="text">
          Afterpay, Laybuy & Genoapay | Free Delivery New Zealand + Australia*
        </p>
      </div>
      <div className="navbar">
        <a href="/" className="logo">
          <img src="./assets/logo.png" alt="Logo" />
        </a>

        <ul className="nav-links">
          <li>
            <a href="/home">
              <span>HOME</span>
            </a>
          </li>
          <li>
            <a href="/shop">SHOP</a>
          </li>
          <li>
            <a href="/faq">FAQ'S</a>
          </li>
          <li>
            <a href="/stockists">STOCKISTS</a>
          </li>
          <li>
            <a href="/whilesale">WHOLESALE</a>
          </li>
          <li>
            <a href="/contact">CONTACT</a>
          </li>
        </ul>

        <div className="rightside">
          <img src="./assets/shop.png" alt="Shop" className="loupe" />
          <div className="minicircle">0</div>
          <img src="./assets/loupe.png" alt="Loupe" />
        </div>
      </div>
    </div>
  )
}

export default NavBar

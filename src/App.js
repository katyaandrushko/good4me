import NavBar from './components/navbar/NavBar'
import './app.scss'
import Home from './components/home/Home'
import Shop from './components/shop/Shop'
import Section from './components/section/Section'
import Control from './components/control/Control'
import Products from './components/products/Products'
import Testimonials from './components/testimonials/Testimonials'
import Shopall from './components/shopall/Shopall'
import News from './components/news/News'
import Goodme from './components/goodme/Goodme'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Shop />
      <Section />
      <Control />
      <Products />
      <Testimonials />
      <Shopall />
      <News />
      <Goodme />
      <Footer />
    </div>
  )
}

export default App

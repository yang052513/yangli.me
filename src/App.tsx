import React from 'react'
import { Scroll } from 'react-scroll-top-btn'
import AOS from 'aos'

import {
  Navbar,
  Banner,
  About,
  Skill,
  Experience,
  Portfolio,
  Blog,
  Contact,
  Footer,
} from './components/index'

function App() {
  AOS.init({
    offset: 300,
    duration: 1000,
    easing: 'ease',
    delay: 100,
  })

  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Skill />
      <Experience />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
      <Scroll borderRadius="50%" color="#03a9f4" xOffset={-20} yOffset={-40} />
    </div>
  )
}

export default App

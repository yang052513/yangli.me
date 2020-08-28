import React from 'react'
import { Scroll } from 'react-scroll-top-btn'

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
      <Scroll borderRadius="50%" color="#03a9f4" xOffset={-20} yOffset={-20} />
    </div>
  )
}

export default App

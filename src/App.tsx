import React from 'react'
import Navbar from './components/nav/Navbar'
import Introduction from './components/Introduction'
import About from './components/About'
import Skill from './components/Skill'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

import { Navbar, Banner } from './components/index'

function App() {
  return (
    <div>
      <Navbar />
      <Introduction />
      <About />
      <Skill />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

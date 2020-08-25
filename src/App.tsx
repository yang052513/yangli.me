import React from 'react'

import {
  Navbar,
  Banner,
  About,
  Skill,
  Experience,
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
      {/* <About />
      <Skill />
      <Experience />
      <Contact />
      <Footer /> */}
    </div>
  )
}

export default App

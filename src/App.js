import React from 'react';
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import About from './components/About'
import Skill from './components/Skill'
import Experience from './components/Experience'
import Project from './components/Project'
import Video from './components/Video'
import Contact from './components/Contact'
import Form from './components/Form'
import Footer from './components/Footer'


function App() {
    return(
        <div>
            <Navbar />
            <Introduction />
            <About />
            <Skill />
            <Experience />
            <Project />
            <Video />
            <Contact />
            <Form />
            {/* <Footer /> */}
        </div>
    )
}

export default App;

import React from 'react';
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import About from './components/About'
import Skill from './components/Skill'
import Experience from './components/Experience'
import Project from './components/Project'
import Video from './components/Video'
import VideoOverlay from './components/VideoOverlay'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollBtn from './components/ScrollBtn'
import ProjectModalWrap from './components/ProjectModalWrap'
import AOS from 'aos'
import './css/aos.css'
import './css/Mobile.css'

function App() {
    AOS.init({
        offset: 200,
        duration: 1000,
        easing: 'ease',
        delay: 100,
    });

    return(
        <div>
            <Navbar />
            <Introduction />
            <About />
            <Skill />
            <Experience />
            <Project />
            <Video />
            <VideoOverlay />
            <Contact />
            <Footer />
            <ScrollBtn />
            <ProjectModalWrap />
        </div>
    )
}

export default App;

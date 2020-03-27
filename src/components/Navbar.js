import React from 'react'
import '../css/Navbar.css'

function Navbar() {
    return(
        <div className="navbar-wrap">
            <a className="nav-link nav-link-ltr">ABOUT</a>
            <a className="nav-link nav-link-ltr">SKILLS</a>
            <a className="nav-link nav-link-ltr">EXPERIENCE</a>
            <a className="nav-link nav-link-ltr">PROJECTS</a>
            <a className="nav-link nav-link-ltr">CONTACT</a>
        </div>
    )
}

export default Navbar
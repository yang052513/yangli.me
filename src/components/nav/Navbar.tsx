import React from 'react'
import '../../styles/Navbar.css'

export const Navbar: React.FC = () => {
  return (
    <div id="nav-bar" className="navbar-wrap">
      <a className="nav-link nav-link-ltr">ABOUT</a>
      <a className="nav-link nav-link-ltr">SKILLS</a>
      <a className="nav-link nav-link-ltr">EXPERIENCE</a>
      <a className="nav-link nav-link-ltr">PROJECTS</a>
      <a className="nav-link nav-link-ltr">CONTACT</a>
    </div>
  )
}

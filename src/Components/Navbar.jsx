import React from 'react';
import './navbar.css';
import pic from '../Images/logo.webp'

export const Navbar = () => {
  return (
    <div className='container'>
      <header className='header'>
        <img className='logo' src={pic} alt="logo" />
     <nav className='nav-bar'>
          <ul className='list'>
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
    </nav>   
    </header>
    </div>
  )
}
export default Navbar;

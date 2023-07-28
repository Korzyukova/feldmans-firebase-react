import './Header.css'
import logo from '../../images/logo.png'
import city from '../../images/city.png'
import { useState, useRef } from 'react'
export default function Header() {
  const links = {
    link1: '/',
    link2: '/aboutus',
    link3: '/clients',
    link4: '/contact-us',
  }

  const menuRef = useRef(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header className="header">
        <img className="header-logo" alt="company logo" src={logo} />
        <div className="links">
          <a className="link" href={links.link1}>
            Home
          </a>
          <a className="link" href={links.link2}>
            About Us
          </a>
          <a className="link" href={links.link3}>
            Clients & Experience
          </a>
          <a className="link" href={links.link4}>
            Contact Us
          </a>
        </div>
        <div className="burger-menu" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </header>
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`} ref={menuRef}>
      <div className="close-menu" onClick={toggleMenu}>
          &#10005;
        </div>
        <a className="link" href={links.link1}>
          Home
        </a>
        <a className="link" href={links.link2}>
          About Us
        </a>
        <a className="link" href={links.link3}>
          Clients & Experience
        </a>
        <a className="link" href={links.link4}>
          Contact Us
        </a>
      </div>
      <img className="header-picture" alt="city" src={city} />
    </>
  )
}

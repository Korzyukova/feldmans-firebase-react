
import "../Header/Header.css";
import logo from '../../images/logo.png';
import city from '../../images/city.png';
export default function Header() {
  const links = {
    link1: '/',
    link2: '/aboutus',
    link3: '/clients',
    link4: '/contact-us',
};
    return (
      <>
        <header className="header">
        <img className="header-logo" alt="company logo" src={logo} />
          <div className="links">
          <a className="link" href={links.link1}>Home</a>
          <a className="link" href={links.link2}>About Us</a>
          <a className="link" href={links.link3}>Clients & Experience</a>
          <a className="link" href={links.link4}>Contact Us</a>
          </div>
        </header>
        <img className="header-picture" alt="city" src={city} />
      </>
    );
  }
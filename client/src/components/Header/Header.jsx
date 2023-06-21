
import "../Header/Header.css";
import logo from '../../images/logo.png';
export default function Header() {
  const links = {
    link1: 'https://www.google.com',
    link2: 'https://www.reddit.com',
    link3: 'https://www.korzuk.com',
    link4: 'https://www.korzuk.com',
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
      </>
    );
  }
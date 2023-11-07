import './Footer.css'
import logo from '../../images/logo4.svg'
import location from '../../images/location.png'
import email from '../../images/email.png'
import call from '../../images/call.png'
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-first">
          <img className="footer-logo" alt="company logo" src={logo} />
          <p className="footer-text">
          Feldmans Advocacy Group is a law firm offering human rights defense and support
           to political activists, entrepreneurs, their businesses and organizations, in and from Russia,
            and around the world.  
          </p>
        </div>
        <div className="footer-second">
          <ul className="footer-contact">
            <li className="name">Get in Touch</li>
            <li className="footer-string">
              <img className="footer-icon" alt="location" src={location} /> New York (USA) & Riga (Latvia)
            </li>
            <li className="footer-string">
              <img className="footer-icon" alt="location" src={email} />
              pavel@ivlev.net
            </li>
            <li className="footer-string">
              <img className="footer-icon" alt="location" src={call} />
              +1 646 491 1412
            </li>
          </ul>
        </div>
        <div className="footer-third">
          <ul className="footer-company">
            <li className="name">Company</li>
            <li>
              <a className="footer-link" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="footer-link" href="/aboutus">
                About Us
              </a>
            </li>
            <li>
              <a className="footer-link" href="/clients">
                Clients & Experience
              </a>
            </li>
            <li>
              <a className="footer-link" href="/contact-us">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

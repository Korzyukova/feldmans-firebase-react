import "./Footer.css";
import logo from '../../images/logo.png';
import location from '../../images/location.png';
import email from '../../images/email.png';
import call from '../../images/call.png';
export default function Footer() {
    return (
      <>
        <footer className="footer">
           <div className="footer-first">
           <img className="footer-logo" alt="company logo" src={logo} />
           <p className="footer-text">Feldmans Advocacy Group is a firm 
offering full digital and communications
support to political campaigns,
non-profit and advocacy organizations.</p>
           </div>
           <div className="footer-second">
           <ul className="footer-contact">
            <li className="name">Get in Touch</li>
            <li className="footer-string"><img className="footer-icon" alt="location" src={location} /> New York, Pennsylvania</li>
            <li className="footer-string"><img className="footer-icon" alt="location" src={email} />info@feldmansgroup.com</li>
            <li className="footer-string"><img className="footer-icon" alt="location" src={call} />+1 929 366 4037</li>
           </ul>
           </div>
           <div className="footer-third">
           <ul className="footer-company">
           <li className="name">Company</li>
           <li>Home</li>
           <li>About Us</li>
           <li>Clients & Experience</li>
           <li>Contact Us</li>
           </ul>
           </div>
        </footer>
      </>
    );
  }
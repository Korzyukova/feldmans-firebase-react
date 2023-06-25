import "./Footer.css";
import logo from '../../images/logo.png';
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
            <li>2</li>
            <li>3</li>
            <li>4</li>
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
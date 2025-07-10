import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer1">
        <div className="imgDiv">
          <img 
            src="/godfatherLOGO-removebg-preview.png"
            alt="logo"
            style={{
              width: "130px",
              height: "80px",
              objectFit: "contain",
            }} 
          />
          <p>Our space foster's Love</p>
        </div>

        <div className="footerlinks">
          <div className="link1">
            <h1>Discover</h1>
            <div className="footerlink">
              <Link to="/listings">Residential</Link>
              <Link to="/listings">Apartments</Link>
            </div>
          </div>

          <div className="link2">
            <h1>Company</h1>
            <div className="footerlink">
              <Link to="/about">About Us</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/listings">All Listings</Link>
              <Link to="/contact-us">Contact Us</Link>
            </div>
          </div>

          <div className="link3">
            <h1>Socials</h1>
            <div className="footerlink">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://wa.me/234XXXXXXXXXX" target="_blank" rel="noopener noreferrer">Whatsapp</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer2">
        <p>&copy; {new Date().getFullYear()} GodFather Real Homes. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

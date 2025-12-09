import { Link } from "react-router-dom";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">

        <div className="row">

          {/* Shop Info */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase mb-3">Jewellery Shop</h5>
            <p>Premium Gold & Silver Jewellery crafted with purity and trust.</p>
          </div>

          {/* Company */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase mb-3">Company</h5>
            <ul className="list-unstyled">
              <li><Link to="/about" className="text-light  footer-links">About Us</Link></li>
              
            </ul>
          </div>
          {/* Social media  */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase mb-3">Social media</h5>
            <span className="social-media">
              <Link to="https://www.instagram.com/ces_jewellers_1971/"
               className="text-light  footer-links">
              <i className="fa-brands fa-instagram"></i></Link>
              </span>
              <span className="social-media">
              <Link to="https://www.facebook.com/pavan.pawar.21522"
               className="text-light  footer-links">
              <i className="fa-brands fa-facebook"></i></Link>
              </span>
              <span className="social-media">
              <Link to="https://www.facebook.com/pavan.pawar.21522"
               className="text-light  footer-links">
              <i className="fa-brands fa-whatsapp"></i></Link>
              </span>
             
            
          </div>
          {/* Support */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase mb-3">Support</h5>
            <ul className="list-unstyled">
              <li><Link to="/help" className="text-light  footer-links">Help & FAQs</Link></li>
             
            </ul>
          </div>

          {/* Legal */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase mb-3">Legal</h5>
            <ul className="list-unstyled">
              <li><Link  to="/privacy" className="text-light  footer-links">Privacy Policy</Link></li>
              <li><Link  to="/terms" className="text-light  footer-links">Terms & Conditions</Link></li>
            </ul>
          </div>

        </div>

        <p className="text-center mt-4 mb-0 text-secondary">
          © {new Date().getFullYear()} Your Jewellery Brand. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

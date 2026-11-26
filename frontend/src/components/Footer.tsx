
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>🩸 Blood<span>Donor</span></h2>
          <p>
            Connecting blood donors with people in need.
            Together, we can make a difference.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-links">
          <h3>Get Involved</h3>
          <a href="/register">Become a Donor</a>
          <a href="#find-donors">Find Blood</a>
          <a href="/login">Login</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Blood Donor. All rights reserved.</p>
        <p>Made with ❤️ to save lives.</p>
      </div>
    </footer>
  );
}

export default Footer;


import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="logo">
        <span className="logo-icon">🩸</span>
        Blood<span>Donor</span>
      </a>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="nav-actions">
        <a href="/login" className="login-btn">Login</a>
        <a href="/register" className="register-btn">
          Become a Donor
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

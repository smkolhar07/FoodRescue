import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        <div className="logo-icon">🍱</div>
        <span>FoodRescue</span>
      </Link>

      <div className="nav-links">
        <a href="#how-it-works">How It Works</a>
        <a href="#impact">Impact</a>
        <a href="#about">About</a>
      </div>

      <div className="nav-actions">

        <Link to="/login" className="login-btn">
          Login
        </Link>

        <Link to="/register" className="get-started-btn">
          Get Started
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;
function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">

          <div className="footer-logo">
            <div className="logo-icon">🍱</div>
            <span>FoodRescue</span>
          </div>

          <p>
            Connecting surplus food with people who need it.
            Together, we can reduce food waste and create a
            stronger community.
          </p>

        </div>


        <div className="footer-column">

          <h4>Platform</h4>

          <a href="#how-it-works">How It Works</a>
          <a href="#impact">Our Impact</a>
          <a href="#about">About Us</a>

        </div>


        <div className="footer-column">

          <h4>Join Us</h4>

          <a href="#restaurant">Restaurant</a>
          <a href="#ngo">NGO / Shelter</a>
          <a href="#volunteer">Volunteer</a>

        </div>


        <div className="footer-column">

          <h4>Support</h4>

          <a href="#contact">Contact</a>
          <a href="#help">Help Center</a>
          <a href="#privacy">Privacy</a>

        </div>

      </div>


      <div className="footer-bottom">

        <span>
          © 2026 FoodRescue. All rights reserved.
        </span>

        <span>
          Made with ❤️ to reduce food waste.
        </span>

      </div>

    </footer>
  );
}

export default Footer;
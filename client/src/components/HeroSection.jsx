function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <div className="hero-badge">
          🌱 Fighting food waste, together
        </div>

        <h1>
          Good food deserves
          <span> a second chance.</span>
        </h1>

        <p>
          FoodRescue connects surplus food from restaurants
          with NGOs and volunteers who can get it to people
          who need it — before it goes to waste.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            🍱 Donate Surplus Food
          </button>

          <button className="secondary-btn">
            🤝 Join as Volunteer
          </button>
        </div>

        <div className="hero-stats">

          <div>
            <strong>5K+</strong>
            <span>Meals Rescued</span>
          </div>

          <div>
            <strong>120+</strong>
            <span>Restaurants</span>
          </div>

          <div>
            <strong>40+</strong>
            <span>NGO Partners</span>
          </div>

        </div>

      </div>

      <div className="hero-visual">

        <div className="food-card">

          <div className="food-card-top">
            <span className="urgent">● URGENT</span>
            <span>12 min ago</span>
          </div>

          <div className="food-image">
            🍛
          </div>

          <h3>Fresh Meals Available</h3>

          <p>Restaurant surplus • 50 meals</p>

          <div className="match-box">
            <div>
              <span>Smart Match</span>
              <strong>94%</strong>
            </div>

            <div className="progress">
              <div></div>
            </div>

            <small>
              Best match found nearby
            </small>
          </div>

          <button className="claim-btn">
            View Donation →
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;
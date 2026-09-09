function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">

      <div className="section-heading">
        <span className="section-label">HOW IT WORKS</span>

        <h2>
          From surplus food
          <br />
          to someone who needs it.
        </h2>

        <p>
          FoodRescue makes food redistribution simple by
          connecting restaurants, NGOs and volunteers in one place.
        </p>
      </div>


      <div className="steps">

        {/* Step 1 */}
        <div className="step-card">

          <div className="step-number">
            01
          </div>

          <div className="step-icon">
            🍽️
          </div>

          <h3>Restaurant Lists Food</h3>

          <p>
            Restaurants can quickly add their surplus food,
            quantity, location and pickup time.
          </p>

        </div>


        {/* Step 2 */}
        <div className="step-card">

          <div className="step-number">
            02
          </div>

          <div className="step-icon">
            🧠
          </div>

          <h3>Smart Matching</h3>

          <p>
            FoodRescue finds suitable NGOs based on distance,
            food requirements, urgency and capacity.
          </p>

        </div>


        {/* Step 3 */}
        <div className="step-card">

          <div className="step-number">
            03
          </div>

          <div className="step-icon">
            🛵
          </div>

          <h3>Volunteer Picks Up</h3>

          <p>
            Nearby volunteers receive pickup tasks and
            transport the food to the selected NGO.
          </p>

        </div>


        {/* Step 4 */}
        <div className="step-card">

          <div className="step-number">
            04
          </div>

          <div className="step-icon">
            ❤️
          </div>

          <h3>Food Reaches People</h3>

          <p>
            NGOs receive the food and distribute it to
            people who need it.
          </p>

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;
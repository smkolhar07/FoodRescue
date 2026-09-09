import "./Login.css";
function Login() {
  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-logo">
          🍱
        </div>

        <h1>Welcome back</h1>

        <p className="login-subtitle">
          Sign in to continue with FoodRescue
        </p>


        <form>

          <div className="form-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>


          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
            />
          </div>


          <div className="login-options">

            <label className="remember">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#forgot">
              Forgot password?
            </a>

          </div>


          <button
            type="submit"
            className="login-submit"
          >
            Login
          </button>

        </form>


        <div className="login-divider">
          <span>or</span>
        </div>


        <p className="register-text">
          Don't have an account?
          <a href="#register"> Create an account</a>
        </p>

      </div>

    </div>
  );
}

export default Login;
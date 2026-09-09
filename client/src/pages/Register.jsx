import { useState } from "react";
import "./Register.css";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    setErrors({
      ...errors,
      [name]: ""
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Name
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must contain at least 3 characters.";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone =
        "Phone number must contain exactly 10 digits.";
    }

    // Role
    if (!formData.role) {
      newErrors.role = "Please select your role.";
    }

    // Password
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password =
        "Password must contain at least 6 characters.";
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password =
        "Password must contain at least one capital letter.";
    } else if (!/[0-9]/.test(formData.password)) {
      newErrors.password =
        "Password must contain at least one number.";
    } else if (
      !/[!@#$%^&*(),.?":{}|<>_\-]/.test(formData.password)
    ) {
      newErrors.password =
        "Password must contain at least one special character.";
    }

    // Confirm password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword =
        "Please confirm your password.";
    } else if (
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword =
        "Passwords do not match.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            role: formData.role,
            password: formData.password
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      alert("Account created successfully! 🎉");

      console.log("User created:", data.user);

      setFormData({
        name: "",
        email: "",
        phone: "",
        role: "",
        password: "",
        confirmPassword: ""
      });

      setErrors({});

    } catch (error) {
      console.error("Registration error:", error);

      alert(
        "Unable to connect to the server. Please make sure the backend is running."
      );
    }
  };

  return (
    <div className="register-page">

      <div className="register-card">

        <div className="register-logo">
          🍱
        </div>

        <h1>Create your account</h1>

        <p className="register-subtitle">
          Join FoodRescue and help make a difference
        </p>

        <form onSubmit={handleSubmit}>

          {/* FULL NAME */}
          <div className="form-group">

            <label>Full Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={errors.name ? "input-error" : ""}
            />

            {errors.name && (
              <p className="error-message">
                ⚠ {errors.name}
              </p>
            )}

          </div>


          {/* EMAIL */}
          <div className="form-group">

            <label>Email Address</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={errors.email ? "input-error" : ""}
            />

            {errors.email && (
              <p className="error-message">
                ⚠ {errors.email}
              </p>
            )}

          </div>


          {/* PHONE */}
          <div className="form-group">

            <label>Phone Number</label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter 10-digit phone number"
              maxLength="10"
              className={errors.phone ? "input-error" : ""}
            />

            {errors.phone && (
              <p className="error-message">
                ⚠ {errors.phone}
              </p>
            )}

          </div>


          {/* ROLE */}
          <div className="form-group">

            <label>I want to join as</label>

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className={errors.role ? "input-error" : ""}
            >

              <option value="">
                Select your role
              </option>

              <option value="restaurant">
                🍽️ Restaurant
              </option>

              <option value="ngo">
                🤝 NGO / Food Shelter
              </option>

              <option value="volunteer">
                🛵 Volunteer
              </option>

            </select>

            {errors.role && (
              <p className="error-message">
                ⚠ {errors.role}
              </p>
            )}

          </div>


          {/* PASSWORD */}
          <div className="form-group">

            <label>Password</label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a strong password"
              className={errors.password ? "input-error" : ""}
            />

            <p className="password-hint">
              Must contain 6+ characters, a capital letter,
              a number and a special character.
            </p>

            {errors.password && (
              <p className="error-message">
                ⚠ {errors.password}
              </p>
            )}

          </div>


          {/* CONFIRM PASSWORD */}
          <div className="form-group">

            <label>Confirm Password</label>

            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className={
                errors.confirmPassword ? "input-error" : ""
              }
            />

            {errors.confirmPassword && (
              <p className="error-message">
                ⚠ {errors.confirmPassword}
              </p>
            )}

          </div>


          {/* SUBMIT */}
          <button
            type="submit"
            className="register-submit"
          >
            Create Account
          </button>

        </form>


        <p className="login-text">
          Already have an account?
          <a href="/login"> Login</a>
        </p>

      </div>

    </div>
  );
}

export default Register;
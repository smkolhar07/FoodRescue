const bcrypt = require("bcryptjs");
const User = require("../models/User");

const registerUser = async (req, res) => {
  try {
    const { name, email, phone, role, password } = req.body;

    // Check required fields
    if (!name || !email || !phone || !role || !password) {
      return res.status(400).json({
        message: "Please fill all required fields."
      });
    }

    // Check if email already exists
    const existingUser = await User.findOne({
      email: email.toLowerCase()
    });

    if (existingUser) {
      return res.status(400).json({
        message: "An account with this email already exists."
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      name,
      email: email.toLowerCase(),
      phone,
      role,
      password: hashedPassword
    });

    res.status(201).json({
      message: "Account created successfully! 🎉",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role
      }
    });

  } catch (error) {
    console.error("Registration error:", error);

    res.status(500).json({
      message: "Something went wrong while creating your account."
    });
  }
};

module.exports = {
  registerUser
};
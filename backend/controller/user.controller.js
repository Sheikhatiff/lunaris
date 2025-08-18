import User from "../model/user.model.js";
import { generateTokenAndSetCookie } from "../utils/handlerFunc.js";

export const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

export const logIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({
        status: "fail",
        message: "Please provide email and password",
      });
    }

    // Find user by email
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(401).json({
        status: "fail",
        message: "Incorrect email or password",
      });
    }

    // Check if password is correct
    const isPasswordCorrect = await user.correctPassword(
      password,
      user.password
    );
    if (!isPasswordCorrect) {
      return res.status(401).json({
        status: "fail",
        message: "Incorrect email or password",
      });
    }

    // Send token with success

    generateTokenAndSetCookie(user, res, 200);
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

export const logout = async (_, res) => {
  try {
    res.clearCookie("jwt");
    res
      .status(200)
      .json({ success: true, message: "Logged out successfully!" });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const checkAuth = async (req, res) => {
  try {
    const user = req.user; // Assuming user is set by auth middleware
    if (!user)
      return res
        .status(400)
        .json({ success: false, message: "user not found" });

    res.status(200).json({ success: true, user });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
    console.log(`Error in checkAuth: ${err.message}`);
    console.log(`Error in checkAuth: ${err}`);
    console.log(`Error in checkAuth: ${err.stack}`);
  }
};

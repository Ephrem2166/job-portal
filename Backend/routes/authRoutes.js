const express = require("express");
const {
  signup,
  signin,
  logout,
  userProfile,
} = require("../controllers/authController");
const { isAuthenticated } = require("../middleware/auth");
const router = express.Router();

// Signup (/api/signup)
router.post("/signup", signup);
// Signin (/api/signin)
router.post("/signin", signin);
// Logout (/api/logout/)
router.get("/logout", logout);
// /api/profile
router.get("/profile", isAuthenticated, userProfile);

module.exports = router;

const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
// Import your movie controllers here

// Example routes
router.get("/", protect, (req, res) => {
  res.json({ message: "Movies route working" });
});

module.exports = router;

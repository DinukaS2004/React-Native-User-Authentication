const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");
const User = require("../models/user");

router.post("/me", authMiddleware, async (req, res) => {
  try {
    const {
      uid,
      email,
      email_verified,
      firebase: { sign_in_provider },
    } = req.user;

    let user = await User.findOne({ firebaseUid: uid });

    if (!user) {
      user = await User.create({
        firebaseUid: uid,
        email,
        emailVerified: email_verified,
        authProvider: sign_in_provider,
      });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

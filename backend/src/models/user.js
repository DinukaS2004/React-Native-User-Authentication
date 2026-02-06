const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firebaseUid: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
    },

    authProvider: {
      type: String,
      enum: ["password", "google", "apple"],
      default: "password",
    },

    emailVerified: {
      type: Boolean,
      default: false,
    },

    role: {
      type: String,
      enum: ["client", "photographer", "admin"],
      default: "client",
    },

    accountStatus: {
      type: String,
      enum: ["active", "suspended", "deleted"],
      default: "active",
    },

    profileCompleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);

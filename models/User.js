const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: "string",
      unique: true,
      required: true,
    },
    email: {
      type: "string",
      unique: true,
      required: true,
    },
    password: {
      type: "string",
      required: true,
    },
    isAdmin: {
      type: "Boolean",
      default: false,
    },
    img: { type: "string" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);

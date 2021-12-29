const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  mess_bill: {
    type: Number,
    required: false,
  },
  profilePic: {
    type: String,
    required: false,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      }, // Token for User
    },
  ],
});

userSchema.methods.generateAuthToken = async function () {
  try {
    // Generating Token for User
    const token = jwt.sign({ _id: this._id }, "thisismysecretkey");
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

const User = mongoose.model("User", userSchema);
module.exports = User;

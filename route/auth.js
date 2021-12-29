const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const Users = require("../model/userSchema");
router.get("/", (req, res) => {
  res.send("Hello World");
});

// Register User Router
router.post("/register", async (req, res) => {
  const { name, email, password, phoneNumber } = req.body;

  if (!name || !email || !password || !phoneNumber) {
    return res.status(422).json({ error: "Error in Registering User" });
  }

  try {
    const user = await Users.findOne({ email: email });
    if (user) {
      return res.status(422).json({ error: "User Already Exists" });
    }
    const newUser = new Users({ name, email, password, phoneNumber });
    await newUser.save();
    res.json({ message: "User Registered Successfully" });
    console.log(
      `User => ${name}  using Email => ${email}Registered Successfully`
    );
  } catch (err) {
    console.log(err);
  }
});
// Login User Router
router.post("/login", async (req, res) => {
  let token;
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(422)
      .json({ error: "Please Fill are the Required Fields" });
  }
  console.log(email, password);
  try {
    const user = await Users.findOne({ email: email });
    if (!user) {
      return res.status(422).json({ error: "Invalid Credentials" });
    }
    const token = await user.generateAuthToken();
    // The Token for the user is generated
    // The Token will expire after 15 minutes
    res.cookie("Student_Token", token, {
      expires: new Date(Date.now() + 900000),
      httpsOnly: true,
    });

    console.log(token);
    if (user.password !== password) {
      return res.status(422).json({ error: "Invalid Credentials" });
    }
    res.status(201).json({ message: "User Logged In Successfully" });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

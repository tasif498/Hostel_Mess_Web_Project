const express = require("express");
const router = express.Router();
const User = require("../model/userSchema");
router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/register", (req, res) => {
  // Getting the Data while the User is Registering
  const { name, email, password, phoneNumber } = req.body;

  if (!name || !email || !password || !phoneNumber) {
    return res.status(422).json({ error: "Please Enter the fields properly" });
  }
  //console.log(name, email, password, phoneNumber);
  res.send("User Registered");
  User.findOne({ email: email }).then((userExit) => {
    if (userExit) {
      return res.status(400).json({ error: "User Already Exist" });
    }
    const user = new User({ name, email, phoneNumber, password });
    user
      .save()
      .then((user) => {
        res.status(201).json({ message: "User Created Successfully" });
      })
      .catch((err) => {
        res.status(500).json({ error: "Error in Creating User" });
      });
  });
});

module.exports = router;

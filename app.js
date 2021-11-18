const express = require("express");
const app = express();
const mongoose = require("mongoose");
const email_validate = require("email-validator");
const User = require("./modules/user");
const swal = require("sweetalert");
const passport = require("passport");
mongoose
  .connect("mongodb://localhost:27017/Hostel_Mess", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(">>>>>>>   Connected to MongoDB   <<<<<<<"))
  .catch((err) => console.log(err));
var bodyParser = require("body-parser");
var encorder = bodyParser.urlencoded();
app.set("view engine", "ejs");
app.use("/assets", express.static("assets")); // to serve static files  (css, js, images)
app.get("/", encorder, (request, response) => {
  response.render("index");
});

app.post("/login", encorder, (request, response) => {
  response.render("login");
  console.log(request.body.name);
  console.log(request.body.password);
  let name = request.body.name;
  let password = request.body.password;
  User.findOne({ name: name, password: password }, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      if (user) {
        console.log("Successfully Logged In");
      } else {
        response.render("login");
      }
    }
  });
});
app.get("/login", (request, response) => {
  response.render("login"); // render the login page
});
app.get("/register", (request, response) => {
  response.render("register"); // render the login page
});
app.post("/register", encorder, (request, response) => {
  response.render("register"); // render the register page
  if (email_validate.validate(request.body.email)) {
    console.warn(request.body.cnfrm_password);
    if (request.body.password[1] == request.body.cnfrm_password[1]) {
      const data = new User({
        _id: new mongoose.Types.ObjectId(),
        name: request.body.name,
        email: request.body.email,
        password: request.body.password[1],
      });
      data
        .save()
        .then((result) => {
          console.log(`User: ${request.body.name} Successfully Registered..`);
        })
        .catch((err) => swal(`${err}", "error`));
    } else {
      swal("Password must be same!", "error");
    }
  } else {
    swal("Invalid Email!", "error");
  }
});

app.listen(3000);

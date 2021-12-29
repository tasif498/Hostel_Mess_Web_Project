const express = require("express");
const app = express();
const port = 4000;
const mongoose = require("mongoose");

app.use(express.json());

//Here we are connecting to the Routes
app.use(require("./route/auth"));

const Local = "mongodb://localhost:27017/hostel_mess";
const DB =
  "mongodb+srv://hitman:zaeem123@cluster0.rmbcl.mongodb.net/Hostel_Mess?retryWrites=true&w=majority";
// "mongodb+srv://hitman:zaeem123@cluster0.rmbcl.mongodb.net/Cluster0?retryWrites=true&w=majority";

// Getting User schema
const User = require("./model/userSchema");
// Connecting to MongoDB
// creating Connection with MongoDB
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfully Connected to MongoDB"))
  .catch((err) => {
    `Error in Connection ${err}`;
  });

app.listen(port, () => {
  console.log(`Hostel Mess is listening at http://localhost:${port}`);
});

const express = require("express");
const app = express();
const port = 3000;

const mongoose = require("mongoose");

const DB =
  "mongodb+srv://hitman:zaeem123@cluster0.hdyho.mongodb.net/Hostel_Mess?retryWrites=true&w=majority";

// Connecting to MongoDB
// creating Connection with MongoDB
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then("Successfully Connected to MongoDB")
  .catch((err) => {
    `Error in Connection ${err}`;
  });

// Routes
app.get("/", (req, res) => {
  res.send("HelloWorld");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

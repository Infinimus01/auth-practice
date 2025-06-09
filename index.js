const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const path = require("path");   // Uses Node's path module	To safely join file paths


const userRoute = require("./routes/user")


dotenv.config();
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use('/user', userRoute)
app.set("view engine", "ejs"); // Tells Express to use EJS	To render .ejs templates
app.set("views", path.join(__dirname, "views"));


mongoose
  .connect(process.env.MONGO_URI, {})

  .then(() => {
    console.log("connected to mongodb");

    app.listen(process.env.PORT || 8001, () => {
      console.log("server is running on port");
    });
  })
  .catch((err) => {
    console.log("error here");
  });

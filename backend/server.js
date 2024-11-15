require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");

//express app
const app = express();
app.use(cors(
  {
    origin: "http://workoutracker.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  }
))

//Middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//Routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

//DB connections
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //Requests
    app.listen(process.env.PORT, () => {
      console.log("Connection successfully done at", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = app;

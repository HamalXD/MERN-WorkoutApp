const express = require("express");
const { createWorkout,getWorkout, getWorkouts } = require("../contollers/workoutController");

const router = express.Router();

//Get workouts
router.get("/", getWorkouts);

//Get a single workout
router.get("/:id", getWorkout);

//Post a workout
router.post("/", createWorkout);

//Delete a workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "Delete a new workout" });
});

//Update a workout
router.patch("/:id", (req, res) => {
  res.json({ msg: "Update a new workout" });
});

module.exports = router;

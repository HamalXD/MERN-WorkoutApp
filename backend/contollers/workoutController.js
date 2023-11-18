const Workout = require("../models/workoutModel");
const mongoose = require('mongoose')

//GET ALL WORKOUTS
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });

  res.status(200).json(workouts);
};

//GET A SINGLE WORKOUT
const getWorkout = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'No such workout found'})
  }

  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "No such workout found" });
  }

  res.status(200).json(workout);
};

//CREATE A NEW WORKOUT
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

  //ADD DOCS TO DB
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//UPDATE A NEW WORKOUT

//DELETE A NEW WORKOUT

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
};

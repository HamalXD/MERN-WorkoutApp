const express = require('express')
const router = express.Router()

//Get workouts
router.get('/', (req, res) => {
    res.json({msg: 'Get all workouts'})
})

//Get a single workout
router.get('/:id', (req, res) => {
    res.json({msg: 'Get one workout'})
})

//Post a workout
router.post('/', (req, res) => {
    res.json({msg: 'Post a new workout'})
})

//Delete a workout
router.delete('/:id', (req, res) => {
    res.json({msg: 'Delete a new workout'})
})

//Update a workout
router.patch('/:id', (req, res) => {
    res.json({msg: 'Update a new workout'})
})

module.exports = router
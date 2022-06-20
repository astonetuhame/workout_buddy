const { json } = require('express')
const express = require('express')
const Workout = require('../models/workoutModel')

const router = express.Router()

// Get all workouts
router.get('/', (req, res) => {
    res.json({msg:'GET all workouts'})
})

//Get a single workout
router.get('/:id', (req, res) => {
    res.json({msg:'GET a single workout'})
})

//Post a new workout
router.post('/', async (req, res) => {
    const {title, load, reps} = req.body

    try {
        const workout = await Workout.create({title, load, reps})
        res.status(201).json(workout)
    } catch (error){
        res.status(400).json({error: error.message})
    }

})

//Delete a new workout
router.delete('/:id', (req, res) => {
    res.json({msg:'DELETE a workout'})
})

//Update a workout
router.patch('/:id', (req, res) => {
    res.json({msg:'UPDATE a workout'})
})


module.exports = router
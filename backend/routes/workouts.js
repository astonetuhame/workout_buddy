const express = require('express')

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
router.post('/', (req, res) => {
    res.json({msg:'POST a new workout'})
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
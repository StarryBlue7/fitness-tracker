const router = require("express").Router();
const Workout = require("../models/Workout.js");

// API routes

// Get workouts data
router.get("/api/workouts", async (req, res) => {
    try {
        const workoutData = await Workout.find({});
        await workoutData.forEach(workout => workout.durationTotaller());
        res.status(200).json(workoutData);
    } catch (err) {
        res.status(400).json(err);
    } 
});

// Add exercise
router.put("/api/workouts/:id", async (req, res) => {
    try {
        const workoutData = await Workout.findByIdAndUpdate(req.params.id, {$push: {'exercises': req.body}});
        res.status(200).json(workoutData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Add workout
router.post("/api/workouts", async (req, res) => {
    try {
        const workoutData = await Workout.create(req.body);
        res.status(200).json(workoutData);
    } catch (err) {
        res.status(400).json(err);
    } 
});

// Get workouts in one-week range
router.get("/api/workouts/range", async (req, res) => {
    try {
        // Set threshold for one week ago
        let oneWeekAgo = new Date(new Date().setDate(new Date().getDate() - 7)).setHours(23,59,59,999);

        const workoutData = await Workout.find({day: {$gte: oneWeekAgo}}).sort({day: 1});
        workoutData.forEach(workout => workout.durationTotaller());
        
        res.status(200).json(workoutData);
    } catch (err) {
        res.status(400).json(err);
    } 
});

module.exports = router;
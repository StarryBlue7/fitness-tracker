const router = require("express").Router();
const Workout = require("../models/Workout.js");

router.get("/api/workouts", async (req, res) => {
    res.json('workouts data')
});

router.put("/api/workouts/:id", async (req, res) => {
    res.json('add exercise')
});

router.post("/api/workouts", async (req, res) => {
    res.json('add workout')
});

router.get("/api/workouts/range", async (req, res) => {
    res.json('get workouts in range')
});

module.exports = router;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: 'Exercise type is required'
            },
            name: {
                type: String,
                trim: true,
                required: 'Exercise name is required'
            },
            duration: {
                type: Number,
                required: 'Exercise duration is required'
            },
            distance: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            }
        }
    ],
    totalDuration: {
        type: Number
    }
});

WorkoutSchema.methods.durationTotaller = function() {
    let timeTotal = 0; 
    this.exercises.forEach(exercise => {
        timeTotal += exercise.duration;
    });
    this.totalDuration = timeTotal;

    return this.totalDuration;
}

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;

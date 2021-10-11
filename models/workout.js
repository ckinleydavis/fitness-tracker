// name of file initially found in /public/index.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
 exercise: [{
     name: {
        type: String,
        required: "Enter exercise name: ",
        trim: true,
     },
     type: {
        type: String,
        required: "Enter type of exercise:",
        trim: true,
     },
     weight: {
        type: Number,
        required: "Enter weight: ",
     },
     sets: {
        type: Number,
        required: "Enter number of sets: ",
     },
     reps: {
        type: Number,
        required: "Enter number of reps: ",
     },
     duration: {
        type: Number,
        required: "How many minutes? ",
     },
     date: {
         type: Date,
         default: Date.now,
     },
 }],
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
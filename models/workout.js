// name of file initially found in /public/index.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Workout = mongoose.model("Workout", workoutSchema);

const workoutSchema = new Schema({

});

module.exports = Workout;
const router = require("express").Router();
const Workout = require("../models/workout");

// addExercise()
router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

// getWorkoutsInRange()
router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .limit(3)
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

// createWorkout()
router.post({

});

// getLastWorkout()
router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });

});



module.exports = router;
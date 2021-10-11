const router = require("express").Router();
const Workout = require("../models/workout.js");
const Fitness = require("../models/workout.js");

// addExercise()
router.post('./api/workout', () => {
    Workout.create()
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
router.get({

});

// getWorkoutsInRange()
router.get({

});

module.exports = router;
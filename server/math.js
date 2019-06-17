const router = require('express').Router();
const db = require('./db');


router.get('/easy', async (req, res, next) => {
    try {
        let easyProblems = db.getEasyProblem((err, founded) => {
            if (err) next(err);
            else {
                res.json(founded);
            }
        });
    } catch (err) {
        console.log('error api/easy', err)
    }
})

router.get('/hard', async (req, res, next) => {
    try {
        let easyProblems = db.getHardProblem((err, founded) => {
            if (err) next(err);
            else {
                res.json(founded);
            }
        });
    } catch (err) {
        console.log('error api/hard', err)
    }
})


module.exports = router
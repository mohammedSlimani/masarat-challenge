const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });

let proto = new Schema({
    num1: Number,
    num2: Number,
    num3: Number,
    ans: Number,
    op1: String,
    op2: String,
    diff: String,
})

let probModel = mongoose.model('math', proto);

const saveMathProblem = (problem) => {
    let mathProb = new probModel(problem);
    return mathProb.save();
}

const getEasyProblem = (done) => {
    return probModel.find({ 'diff': 'easy' }, done);
}

const getHardProblem = (done) => {
    return probModel.find({ 'diff': 'hard' }, done);
}

exports.saveMathProblem = saveMathProblem;
exports.getEasyProblem = getEasyProblem;
exports.getHardProblem = getHardProblem;
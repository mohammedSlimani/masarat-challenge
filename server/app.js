const express = require('express');
const app = express();
const mathRoutes = require('./mathRoutes');
const db = require('./db');
const cors = require('cors');

//app configuration
app.use(express.static('public'));
app.use(cors());

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/views/index.html');
});

app.use('/api', mathRoutes);
const math = {
    num1: 5,
    num2: 12,
    num3: 10,
    ans: 7,
    op1: '+',
    op2: '-',
    diff: 'hard'
};
//db.saveMathProblem(math)

// listen for requests :)
const listener = app.listen(process.env.PORT, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});

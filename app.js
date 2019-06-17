const express  = require('express');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
const mathRoutes = require('./math');

//configuration of the app
app.use('/public', express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//routes
app.use('/',mathRoutes);
app.listen(3000,()=>console.log('app running at 3000'));
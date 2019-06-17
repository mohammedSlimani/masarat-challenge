const express  = require('express');
const cors = require('cors')
const app = express();

app.use(cors());
app.listen(3000,()=>console.log('app running at 3000'));
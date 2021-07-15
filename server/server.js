const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes');

let app = express();

//middleware
app.use(cors());
app.use(express.json());


//use middleware router
app.use('/api', apiRouter)


app.listen(3000);
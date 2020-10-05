const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');
const keys = require('./mongo_keys');//connect to mongoDB
const userRouter = require('./routers/router');

mongoose.connect(keys.mongoURI)
.then(() => console.log('MongoDB connected...'))
.catch(err => console.error(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));
app.use('/api/user', userRouter);

 
app.listen(3000, () => console.log('Server running on port 3000!'));
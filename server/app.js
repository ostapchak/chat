const express = require('express');
const app = express();
const http = require('http');
const server = http.Server(app);

const bodyParser = require('body-parser');

const mongoose = require ('mongoose');

const keys = require('./mongo_keys');//connect to mongoDB
const userRouter = require('./routers/router');

const port = process.env.PORT || 3000;

const socketIO = require('socket.io');
const io = socketIO(server);

io.on('connection', (socket) => {
   console.log('user connected');
});

mongoose.connect(keys.mongoURI)
.then(() => console.log('MongoDB connected...'))
.catch(err => console.error(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));
app.use('/api/user', userRouter);


app.listen(port, () => console.log(`Server running on port ${port}!`));
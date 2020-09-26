const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');
//const postRouter = require('.routers/router')
const keys = require('./mongo_keys');//connect to mongoDB

const port = process.env.PORT || 3000;
const clientPath = path.join(__dirname, './chat-frontend/src/');
router.use(express.static(__dirname)) ;

mongoose.connect(keys.mongoURI)
.then(() => console.log('MongoDB connected...'))
.catch(err => console.error(err))

const app = express();
app.use(bodyParser.json());
//app.use('/api/post', postRouter)
app.use(express.static(clientPath));

app.get('/',  async (req, res) => {
   return res.send("sdfsdfsdfd")
});

app.listen(port, () => {
   console.log(`Server has been started on port ${port}...`);
   
})
module.exports = router;
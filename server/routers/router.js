const express = require('express');
const router = express.Router();
const User = require('../models/user')

router.post('/login', async  (req, res) => {
   console.log(req.body);
   const users = await User.find({'email':req.body.email});
   res.status(200).json(users[0]);
})

router.post('/registration', async (req, res) => {
   const newUser = {
      email: req.body.email,
      password: req.body.password,
      name: req.body.name
   }
   const user = new User(newUser);
   await user.save();
   console.log(`============> User ${newUser.email} created!`)
   res.status(201).json(user);

})

module.exports = router;
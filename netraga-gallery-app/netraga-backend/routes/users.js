const { compareSync } = require('bcrypt')
var express = require('express')
var router = express.Router()
const {fetchAllUsers, registerUser, loginUser} = require('../controllers/user')
const {protect} = require('../middleware/auth');
const advancedFind = require('../middleware/advancedFind');

const User = require('../models/user');

router.route('/')
.get(advancedFind(User) ,fetchAllUsers)
.post(registerUser);



router.route('/login')
.post(loginUser);


// router.route('/upload/:id')
// .put(uploadProfilePic);

module.exports = router
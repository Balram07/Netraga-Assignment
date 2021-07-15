var express = require('express')
var app = express()
var router = express.Router()
const {protect, authorize} = require('../middleware/auth');
const {fetchAllGallery,addGallery, uploadPic} = require('../controllers/gallery')
const Workout = require('../models/gallery')
const advancedFind = require('../middleware/advancedFind');

router.route('/')
.get(advancedFind(Gallery,{
    path: 'user',
    select: 'name email'
  }),  fetchAllGallery)
//.post(protect, authorize('trainer', 'admin') ,addGallery)
.post(addGallery)




module.exports = router
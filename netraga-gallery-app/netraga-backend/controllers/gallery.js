const Gallery = require('../models/gallery')
const asyncHandler = require('../middleware/async');
let path = require('path');










const fetchAllGallery = asyncHandler(async(req,res, next) => {

    res.json(res.advancedResults);
        
})

const addGallery = asyncHandler(async(req,res,next) => {

        let GalleryRes = await Gallery.create(req.body);
        console.log(GalleryRes);
        res.status(201).json({success: true})
})

const uploadPic = asyncHandler(async(req, res, next)=>{
   if(!req.files) return next({status:404, message: 'Please upload Pic'})

    // file instance
   const file = req.files.file

   console.log(file.name);
   file.name = `pic_${user._id}${path.parse(file.name).ext}`

   console.log(file.name);
  
   file.mv(`./public/uploads/${file.name}`, async(err)=>{
        if (err) return next({status:500, message: 'Cant upload Pic'})

        await User.findByIdAndUpdate(req.params.id, {photo: file.name});
        res.json({success: true, data: file.name})
   })
})





module.exports = {fetchAllGallery,addGallery,uploadPic}
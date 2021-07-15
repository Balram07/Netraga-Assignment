const mongoose = require('mongoose');


// 2. Create a schema
const Schema = mongoose.Schema;
const GallerySchema = new Schema({
//   _id: Schema.ObjectId,
    photo: {
        type: String,
        default: 'no-photo.jpg'
    },
  title: {
    type: String,
    minLength: 5,
    unique: true,
    required: [true, 'Provide a title.. It is mandatory']
  },
  desc: {
    type: String
  },
   user: {
     type: Schema.Types.ObjectId,
     ref: 'User'
   },

});

// 3. Model from Schema (object from schema)
const Gallery = mongoose.model('Gallery', GallerySchema);

module.exports = Gallery;
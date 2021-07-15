const express = require('express')
const app = express();
require('dotenv').config()
require('colors')
const userRoutes = require('./routes/users')
const galleryRoutes = require('./routes/gallery')

const connectToDatabase = require('./db')
const errorHandler = require('./middleware/errorhandler');
const cors = require('cors');
const fileupload = require('express-fileupload')

connectToDatabase()

app.use(express.json());
app.use(cors());
app.use(fileupload())

app.use(express.static('public'))

app.use('/api/v1/users', userRoutes)
app.use('/api/v1/gallery', galleryRoutes)


app.use(errorHandler);

app.listen(process.env.APP_PORT, ()=> console.log(`listening on port ${process.env.APP_PORT}`.green.bold))
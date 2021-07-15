function errorHandler (err, req, res, next) {
    console.log('Error handler invoked.....'.red.bold)
    console.log(err.message.red);
    // if (res.headersSent) {
    //   return next(err)
    // }
    res.status(500).json({success: false, message: err.message})
}

module.exports = errorHandler;
const User = require('../models/users');
const path = require('path')
const asyncHandler = require('../middleware/async')


const fetchAllUsers = asyncHandler(async(req, res)=>{
    res.status(200).json(res.advancedResults);
})

 
const registerUser = asyncHandler(async(req, res)=>{
    let user = await User.create(req.body);
    const token = await user.generateToken();
    res.status(201).json({success:true, token})
})

const loginUser = asyncHandler(async(req, res)=>{

    let {email, password} = req.body;
    
    let user = await User.findOne({email});

    // User.matchPassword

    const isMatch = await user.matchPassword(password);
    if(!isMatch) throw new Error('Invalid username/password!!')

    console.log(user);


    const token = await user.generateToken();
    res.json({success:true, token})

})

module.exports = {fetchAllUsers, registerUser, loginUser}
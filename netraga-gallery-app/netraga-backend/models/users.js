const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const Schema = mongoose.Schema;


const UserSchema = new Schema({

    name: {
        type: String,
        unique: true,
        required: [true, 'Please provide a name']
    },
    email: {
        type: String,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        minLength: 6
    },
    role: {
        type: String,
        enum: ['user', 'trainer', 'admin'],
        default: 'user'
    }
});

UserSchema.methods.generateToken = async function(){
    console.log('Generating token ***')
    // let token = await jwt.sign({id: this._id, role: this.role}, process.env.JSON_SECRET_KEY, { expiresIn: '1h' });
    let token = await jwt.sign({id: this._id, role: this.role}, process.env.JSON_SECRET_KEY);
    // console.log(token);
    return token;
}

UserSchema.methods.matchPassword = async function(enteredPassword){
    console.log('Inside match password ***')
    return await bcrypt.compare(enteredPassword, this.password);
}

UserSchema.pre('save', async function() {
    console.log(this);
    console.log('Before User save operation ..... ', this.password);
    let salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
  });

// 3. Model from Schema (object from schema)
const Users = mongoose.model('Users', UserSchema);

module.exports = Users;
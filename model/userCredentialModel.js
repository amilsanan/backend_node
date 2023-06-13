const mongoose = require('mongoose');

const userCredential = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone:Number,
    image: String,
    createdAt:{
        type: Date,
        default: new Date(),
    },
    isBlocked:{type:Boolean, default:false}
})

const UserCredential = mongoose.model('User', userCredential);
module.exports =UserCredential;
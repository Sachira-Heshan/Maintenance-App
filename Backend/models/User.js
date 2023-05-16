const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { 
        type: String,
         required: true 
        },
    email: { 
        type: String,
        // required: true,
        // unique: true
     },
    mobile_no:{
        type:String,
        required:true,
        unique:true   
    },
    password: { 
        type: String,
        required: true 
    },
    role: { 
        type: String, 
        enum: ['complainer','supervisor','admin'],
        default: 'complainer'
     },
    accepted: {     //check wether the user is accepted by the admin as a supervisor
        type: Boolean, 
        default: false
     },
     complainer_type: {
        type: String,
        enum: ['student', 'staff','supervisor','other'], //??
        default: 'other'
        },
     
  });
  



exports.User_Details = mongoose.model('user-details', UserSchema );
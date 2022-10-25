const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    gender : String,
    birthday : Date,
    mobilenumber : String,
    nic : String,
    qualification : String,
    specialization : String
})

const doctordb = mongoose.model('doctordb', schema);

module.exports = doctordb;
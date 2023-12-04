const mongoose = require('mongoose');

const Admin = new mongoose.Schema({
    email : {
        type:String,
        required:true,
        unique:true,
    },
    name:{
        type:String,
        require:true,
    },
    password :{
        type:String,
        required:true,
        unique:true,
    },
    token :{
        type:String,
    }
});

const Adminschema = mongoose.model("Adminschema", Admin);

module.exports = Adminschema;
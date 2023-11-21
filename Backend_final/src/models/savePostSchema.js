const mongoose = require('mongoose');

const SavepostSchema = new mongoose.Schema({
    email: {
        type:String
        
    },
    job_id: {
        type:Number,
        unique:true
    }
});

const Savedpost = mongoose.model("Savedpost", SavepostSchema);

module.exports = Savedpost;
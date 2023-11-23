const mongoose = require('mongoose');

const SavepostSchema = new mongoose.Schema({
<<<<<<< HEAD
    job_id : Number,
    job_seekerid: String
=======
    email: {
        type:String
        
    },
    job_id: {
        type:Number,
        unique:true
    }
>>>>>>> 9c5b061c5b09c8be6ca4241e1cab9b354da5ca40
});

const Savedpost = mongoose.model("Savedpost", SavepostSchema);

module.exports = Savedpost;
const mongoose = require('mongoose');

const SavepostSchema = new mongoose.Schema({
    email: {
        type:String
        
    },
    job_id: {
        type:Number,
       
    }
});

SavepostSchema.index({ email: 1, job_id: 1 }, { unique: true });
const Savedpost = mongoose.model("Savedpost", SavepostSchema);

module.exports = Savedpost;
const mongoose = require('mongoose');

const SavepostSchema = new mongoose.Schema({
    job_id : Number,
    job_seekerid: Number
});

const Savedpost = mongoose.model("Savedpost", SavepostSchema);

module.exports = Savedpost;
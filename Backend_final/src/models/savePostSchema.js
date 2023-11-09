const mongoose = require('mongoose');

const SavepostSchema = new mongoose.Schema({
    job_id : Number,
    email: String
});

const Savedpost = mongoose.model("Savedpost", SavepostSchema);

module.exports = Savedpost;
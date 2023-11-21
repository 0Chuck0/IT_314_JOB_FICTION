const mongoose = require('mongoose');

const applyschema = new mongoose.Schema({
    job_id : Number,
    job_seekerid: String
});

const apply = mongoose.model("apply", applyschema);

module.exports = apply;
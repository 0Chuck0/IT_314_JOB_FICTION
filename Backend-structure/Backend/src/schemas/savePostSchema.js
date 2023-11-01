const mongoose = require('mongoose');

const savePostSchema = new mongoose.Schema({

    job_id : Number,
    job_seekerid: String
});

const savedPost = mongoose.model("savedPost", savePostSchema);

module.exports = savedPost;


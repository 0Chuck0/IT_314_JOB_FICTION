const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    myFile:String
});

const Image = mongoose.model("Image", ImageSchemaSchema);

module.exports = Image;
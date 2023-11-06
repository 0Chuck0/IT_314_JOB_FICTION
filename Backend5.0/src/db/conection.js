const mongoose = require('mongoose');

async function conectMongodb(url){

    await mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        // useCreateIndex:true,
    });
}

module.exports = {conectMongodb};

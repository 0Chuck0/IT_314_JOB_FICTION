const mongoose = require('mongoose');

async function conectMongodb(url){

    return mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
<<<<<<< HEAD
        // useCreateIndex:true,
=======
         useCreateIndex:true,
>>>>>>> 9c5b061c5b09c8be6ca4241e1cab9b354da5ca40
    });
}

module.exports = {conectMongodb};

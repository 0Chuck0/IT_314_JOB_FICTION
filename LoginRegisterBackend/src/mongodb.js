const mongoose = require("mongoose")


//create the new DataBase
mongoose.connect("mongodb://127.0.0.1:27017/jobseeker", 
  {useNewUrlParser : true, 
   useUnifiedTopology : true,
})
.then( () => console.log("connectiond succesful...."))
.catch((err) => console.log(err)); 

const loginschema = new mongoose.Schema({
   
   name:{
      type:String,
      require:true
   },
   email:{
        type:String,
        required:true
    },
   password:{
        type:String,
        required:true
    },
   mobileNumber:{
       type:Number,
       required:true
   }
})

// Schema 
// A mongoose schema defines the structure of the document,
// default values, validators, etc.
const collection = new mongoose.model("collection",loginschema);
module.exports = collection;

// A mongoose model is a wrapper on the mongoose schema.
// A mongoose schema defines the structure of the document,
// default values,validators, etc .,whereas a mongoose model 
// provides an interface to the database for creating ,
// querying ,updating ,deleting records ,etc.

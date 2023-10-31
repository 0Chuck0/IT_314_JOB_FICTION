const mongoose = require("mongoose");


// *********below for connecting node with mongodb *******//
mongoose.connect("mongodb://127.0.0.1:27017/backend", 
  {useNewUrlParser : true, 
   useUnifiedTopology : true,
})
.then( () => console.log("connection succesful...."))
.catch((err) => console.log(err)); 




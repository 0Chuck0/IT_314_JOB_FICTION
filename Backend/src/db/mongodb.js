const mongoose=require("mongoose");


// *********below for connecting node with mongodb *******//
mongoose.connect("mongodb://localhost:27017/login_db_project")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed to connect");
})



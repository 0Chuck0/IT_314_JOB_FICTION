const mongoose=require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/dhyey")
.then(()=>{
    console.log("mongodb connected");
})

.catch((error)=>{
    console.log(error)
    console.log("failed to connect");
})



const express = require("express");
const app = express()
const cookieParser=require("cookie-parser");
app.use(cookieParser());

module.exports = {

    get:async (req,res)=>{
        const id = req.params.id;
        console.log(id);
        res.render("job_description",{jobid : id})
    },
   
}
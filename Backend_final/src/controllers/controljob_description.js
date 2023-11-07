const express = require("express");
const app = express()
const cookieParser=require("cookie-parser");
app.use(cookieParser());

module.exports = {

    post:async (req,res)=>{
        res.render("job_description",{jobid : req.body.id})
    }
}
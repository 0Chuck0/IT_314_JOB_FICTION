const express = require("express");
const app = express()
const cookieParser=require("cookie-parser");
app.use(cookieParser());

module.exports = {

    get:async (req,res)=>{
         res.render("job_description")
    }
}
<<<<<<< HEAD
module.exports = {

    get:async (req,res)=>{

        res.render("home");
=======
const Jobs = require("../models/jobs");

module.exports = {

    get:async (req,res)=>{
        const data = await Jobs.find();

        if(req.cookies.jwt){
            res.render("home.hbs",{data:data , logged:true});
        }
        else{
        res.render("home.hbs",{data:data});
        }
>>>>>>> 9c5b061c5b09c8be6ca4241e1cab9b354da5ca40

    },

}
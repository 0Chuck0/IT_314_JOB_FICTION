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

    },

}
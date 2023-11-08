const path = require("path")
module.exports = {

    get:async (req,res)=>{

        res.sendFile(path.join(__dirname,"/../../templates/views/jobs_1.html"));

    },




}
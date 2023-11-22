module.exports = {

    get:async (req,res)=>{
        if(req.cookies.jwt){
            res.render("home.hbs",{logged:true});
        }
        else{
        res.render("home.hbs");
        }

    },

}
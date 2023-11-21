module.exports = {

    get:async (req,res)=>{

        res.render("home.hbs",{logged:true});

    },

}
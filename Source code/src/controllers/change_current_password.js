    const bcrypt  = require("bcryptjs");
    const Register = require("../models/jobseekers");
    const Companyregister = require("../models/companyregisterschema");
    const jwt = require("jsonwebtoken");

    module.exports = {

        get:async (req,res)=>{
            
            
            var seeker=undefined;
            var company=undefined;
            var admin=undefined;
            var name=undefined
            var profile=undefined
            if(req.who===1)
            {
                company=true
            }
            else if(req.who==2)
            {
                seeker=true
                profile=req.body.profile
                name=req.body.name
            }
            else
            {
                admin=true
            }
            console.log(company)
            console.log(seeker)
            console.log(admin)
            res.render("changepass.hbs",{who:req.who,id:req.id,seeker,company,admin,logged:true});

        },
        post:async (req,res)=>{

            try{


                                    var t=0;
                                    if(req.params.who==='1')
                                    {
                                        const check = await Companyregister.findOne({ _id: req.params.id });
                                        
                                        const isMatch = await bcrypt.compare(req.body.currentpassword, check.password);
                                        
                                        if (isMatch) {

                                                
                                            return res.status(400).send('<script>alert("current password and before are same so type new "); window.location = "/change_password";</script>');

                                           
                                        } 

                                        if(req.body.Newpassword !== req.body.conforimpassword) 
                                        {
                                            return res.status(400).send('<script>alert("new password and confirm password is not matching"); window.location = "/change_password";</script>');
        
                                        }


                                        const HashPassword  = await bcrypt.hash(req.body.Newpassword, 10);

                                        await Companyregister.findOneAndUpdate({_id:req.params.id},{password:HashPassword});
                                        res.status(200).send('<script>alert("Password updated successfully."); window.location = "/companyhome";</script>');

                                           
                                     
                                    }
                                    else if(req.params.who==='2')
                                    {
                                    

                                        const check = await Register.findOne({ _id: req.params.id });
                                        
                                        const isMatch = await bcrypt.compare(req.body.currentpassword, check.password);
                                            

                                           
                                            if (!isMatch) {

                                                
                                                return res.status(400).send('<script>alert("current password and your password is not matching "); window.location = "/change_password";</script>');

                                               
                                            } 

                                            
                                            if(req.body.Newpassword === req.body.currentpassword) 
                                            {
                                                return res.status(400).send('<script>alert("New password and current password are same enter new password"); window.location = "/change_password";</script>');
            
                                            }

                                            if(req.body.Newpassword !== req.body.conforimpassword) 
                                            {
                                                return res.status(400).send('<script>alert("new password and confirm password is not matching"); window.location = "/change_password";</script>');
            
                                            }


                                              
                                            const HashPassword  = await bcrypt.hash(req.body.Newpassword, 10);

                                            await Register.findOneAndUpdate({_id:req.params.id},{password:HashPassword});
                                            res.status(200).send('<script>alert("Password updated successfully."); window.location = "/home";</script>');


                                    }


                                
        
            }
        
            catch(err){

                res.status(400).send(`<script>alert("${err}."); window.location = "/";</script>`);
        
            }
        
        }

    }
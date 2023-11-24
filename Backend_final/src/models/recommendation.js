const mongoose = require('mongoose');

const recommendationSchema = new mongoose.Schema({
    email: {
        unique:true,
        required:true,
        type:String
        
    },

    r_employment: {
        type:String
        
    },

    r_work_mode: {
        type:String
        
    },
    r_location: 
        [{
            type:String
    
        }],
        
    
    r_salary: {
        type:String
        
    },
    r_job_title:
    
        [{
            type:String
    
        }],
    
    
    
});


const recommendation = mongoose.model("recommendation", recommendationSchema);

module.exports = recommendation;
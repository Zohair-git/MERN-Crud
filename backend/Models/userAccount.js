
const mongoose = require("mongoose");




const userAccount_Model = mongoose.Schema(

    {
        userName:{
            type:String,
            required:[true,"User Name must be filled"]
        },

        userEmail:{
            type:String,
            required:[true,"User Email must be there and Valid"]
        },
        
        userPassword:{
            type:String,
            required:[true,"User must there and contain 8 plus characters"]
        },

       
        
    }
    );
        
        
module.exports = mongoose.model("userAccount",userAccount_Model)






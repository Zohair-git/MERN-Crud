const mongoose = require("mongoose");


const userRole_Model = mongoose.Schema(

    {
        roleName:{
            type:String,
            required:[true,"User role must be filled"]
        },
        status:{
            type:String,
            required:[true,"status must be defined !!"]
        }
    }

)


const userRoles = mongoose.model("userRoles",userRole_Model)


module.exports = {userRoles}


const {userRoles} = require("../Models/userRoles")
 

//method    GET 
//API        http://localhost:5000/userroles

async function getRoles(req,res){

    const allRoles = await userRoles.find();


    return res.status(200).send({"Data":allRoles}) 
}



//method    POST 
//API       http://localhost:5000/userroles

async function createRoles(req,res){

    const {roleName,roleStatus} = req.body;

    const roleName_Checker = /^(?! )[A-Za-z ]+(?<! )$/;
    const roleStatus_Checker = /^(active|nonactive)$/;




   if (!roleName_Checker.test(roleName))  return res.status(500).send({"error":"role name must contain characters and no extra spaces"})
    // (roleStatus_Checker.test(roleStatus)) ? "" : res.send({"error":"role name must contain status active and non active"})


    // bhand araha he 
    const allRoles = await userRoles.find({roleName:roleName.toLowerCase()});


    if(allRoles.length >0){
        return res.send({"error":"already added in database"})
    }

    // bhand araha he 


    const newRole = await userRoles.create({
        roleName: roleName.toLowerCase(),  
        status:roleStatus
    })




    return res.status(201).send(
        {
            "data":req.body,
            "message":"User Role Added Successfully !!"
        }
    ) 
}


//method    DELETE 
//API       http://localhost:5000/userroles/:id

async function deleteRole(req,res){
    const roleDel_Name = req.params.id.toLowerCase()
    
    const existing = await userRoles.findOne({roleName:roleDel_Name})

    if(existing){
        const delRole = await userRoles.deleteOne({roleName:roleDel_Name});
        return res.status(200).send({"message":"role deleted succesfully!!"})
    }else{
        return res.status(500).send({"error":"role not available"})
    }


  


  
}




//method    UPDATE 
//API       http://localhost:5000/userroles/:id

async function updateRole(req,res){

    const {roleName,status} = req.body;

    const roleDel_Name = req.params.id.toLowerCase()
    
    const existing_old_data = await userRoles.findOne({roleName:roleDel_Name})



    if(existing_old_data){

        const updateRecord = await userRoles.updateOne(   
    
            { 
                roleName  : req.params.id.toLowerCase()
            } , 
            
            { 
                $set :  {   
                    roleName: roleName.toLowerCase(),
                    status:status
                }  
            }  
        
        
        )


      
        return res.status(200).send({"message":"updated Success fully"})







    }else{

        return res.status(500).send({"error":"role not found"})
    }


}



module.exports = {getRoles,createRoles,deleteRole,updateRole}












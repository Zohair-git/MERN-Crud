import React, { useState } from 'react'
import { useParams } from 'react-router-dom';


const RoleUpdate = () => {
  
    const [RoleName,setRoleName] = useState();
    const [RoleStatus,setRoleStatus] = useState();
    
    const {id} = useParams();
  
  const UpdateRole = async(e)=>{
    e.preventDefault();

    const UpdateRole = {
        roleName:RoleName,
        status:RoleStatus
    }


    const RoleUpdate = await fetch(`http://localhost:5000/userroles/${id}`,{
        method:"PUT",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(UpdateRole)
    });

    const Update_Response = await RoleUpdate.json();

    if(Update_Response.message){
        alert("Role Updated Successfully !!")
    }else{
        alert(Update_Response.error)
    }

  }
  
  
  
  
    return (

    <div className='container mt-5'>
    <h1 className='mt-3'>Role Update</h1>
    <form onSubmit={UpdateRole} >
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Role Name</label>
        <input type="text" class="form-control" onChange={(e)=> setRoleName(e.target.value)} />
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Role Status</label>
        <select className='form-control' onChange={(e)=> setRoleStatus(e.target.value)} >
          <option  value="active">Active</option>
          <option value="unactive">Block</option>
        </select>
      </div>

      <button type="submit" class="btn btn-primary" >Add Role</button>
    </form>


  </div>
  )
}

export default RoleUpdate

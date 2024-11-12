import React, { useState } from 'react'

const Role = () => {

  const [RoleName,setRoleName] = useState();
  const [RoleStatus,setRoleStatus] = useState();



  const handleSubmit = async(e) =>{
    e.preventDefault();  


    const RoleData = {
      roleName:RoleName,
      roleStatus:RoleStatus
    }

    const Role_Response = await fetch("http://localhost:5000/userroles",{
      method:"POST",
      headers:{
        'Content-Type':"application/json"
      },
      body:JSON.stringify(RoleData)
    })

    const Api_response = await Role_Response.json();

    if(Api_response.message) {
      alert("Data added success !!")
    }else{
      alert(Api_response.error)
    }

  }




  return (
    <div className='container mt-5'>
      <h1 className='mt-3'>Role Register</h1>
      <form   onSubmit={handleSubmit}>
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

export default Role

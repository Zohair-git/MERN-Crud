import React, { useEffect, useState } from 'react'

import {Link,useNavigate} from 'react-router-dom'


const RoleList = () => {

  const Navigatee = useNavigate();
  const [AllRoles , setAllRoles] = useState([]);


  const getAllRoles = async() =>{
    const Response_Role = await fetch("http://localhost:5000/userroles");
    if(Response_Role.status == 200){
      const UserRole = await Response_Role.json();
      setAllRoles(UserRole.Data)
      console.log(AllRoles)
    }else{
      alert("Some Internal Errors !!")
    }
    
    
  }


  const deleteRole = async(deleteId)=>{

    const Response_Role_Delete = await fetch(`http://localhost:5000/userroles/${deleteId}`,{
      method:'DELETE'
    });
    if(Response_Role_Delete.status == 200){
      alert("Role Deleted Successfully !!")
      Navigatee("/");

    }else{
      
      alert(`${deleteId} Role not  Deleted Successfully !!`)
    }

  }

  useEffect(()=>{  getAllRoles()  },[])


  return (
    <div className='container mt-4'>
      <h1  className='mt-2'>Roles List</h1>
      <table class="table">
  <thead>
    <tr className='table-dark'>
      <th scope="col">#</th>
      <th scope="col">Role Name</th>
      <th scope="col">Status</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
      
  <tbody>
  {
  AllRoles && AllRoles.length > 0 ? 
    AllRoles.map((Role, index) => (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{Role.roleName}</td> 
        <td>{Role.status}</td> 
        <td>
          <button className='btn btn-danger btn-sm' onClick={()=> deleteRole(Role.roleName)}>Delete</button>
          <Link to={`/roleupdate/${Role.roleName}`} className = "btn btn-primary btn-sm"  > Update</Link>
          </td> 
      </tr>
    )) : 
    <tr><td colSpan="3">Roles not found</td></tr>
}

  </tbody>
</table>
    </div>
  )
}

export default RoleList

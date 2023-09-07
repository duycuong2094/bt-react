import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function PriviteRouter() {
    const islogin=false;
    // Navigate khác useNavigate 
    // Navigate chuyển hướng router và render component 

  return (
    <div>
        {islogin?<Outlet/>:<Navigate to={"login"}/> }
    </div>
  )
}

export default PriviteRouter
import React from 'react'
import { Navigate } from 'react-router-dom';
const ProtectedRoute = (props) => {
    let auth=false;
    if(!auth){
    return <Navigate to="/signin"/>
    }
  return (
    <div>{props.children}</div>
  )
}

export default ProtectedRoute
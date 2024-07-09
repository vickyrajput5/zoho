import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = ({isAuthenticated, children}) => {
    if(!isAuthenticated){
        return <Navigate to={"/signin"}/>
    }
  return children ? children : <Outlet/>
}

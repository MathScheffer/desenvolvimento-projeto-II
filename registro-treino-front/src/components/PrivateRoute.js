import React from "react"
import { Navigate } from "react-router-dom"

const PrivateRoute = ({role,children}) => {
    const token = localStorage.getItem('token')

    return(
        token ? 
        children :
        <Navigate to='/login' />
    )

}

export default PrivateRoute
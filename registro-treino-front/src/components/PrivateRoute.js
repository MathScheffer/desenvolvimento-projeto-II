import React from "react"
import { Link, Navigate } from "react-router-dom"
import JWT from 'jsonwebtoken';
import Button from "./button";
import Redireciona from "./redireciona";
const PrivateRoute = ({role,children}) => {
    

    const token = localStorage.getItem('token')


    const gerenciarRota = () => {
        if (token){
           return( 
                JWT.verify(token, 'encryptor', (err, payload) => {
                    console.log(err)
                    console.log(payload)
                    if(err){
                        console.log(err.name)
                        return <Redireciona />

                    }else if(payload.role == role){
                        return children
                    }else{
                        return <div>
                            <h1>Você não possue permissão para acessar essa página!</h1>
                        </div>
                    }
                })
           )

            
        }else{
            return <Navigate to='/login'/>
        }
    }
    
    return(
        gerenciarRota()
    )

}

export default PrivateRoute
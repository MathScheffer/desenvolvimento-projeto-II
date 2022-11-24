import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Outlet, Route, Routes, useParams } from "react-router-dom";
import EditarRotina from "../components/editar-rotina/editarRotina";
import PopupEditarRotina from "../components/editar-rotina/popupEditarRotina";
import Header from "../components/header";
import useFetch from "../customHooks/useFetch";

const EditarUsuario = () => {
    const params = useParams();
    const [usuario, setUsuario] = useState();
    const [reload, setReload] = useState(0);
    const {data, loading, error, request } = useFetch();
    let doRequest = useRef(true);

    useEffect(() => {
        const url = `http://localhost:3000/api/usuarios/${params.id}`;
        if(doRequest.current){
            console.log("primeiro carregamento")
            request(url)    
        }
        doRequest = false
    },[request])

    useEffect(() => {
        const url = `http://localhost:3000/api/usuarios/${params.id}`;
        if(doRequest.current){
            console.log("realizando update maroto")
            request(url)    
            
        }
    },[reload])

    useEffect(() => {
        setUsuario(data)
        console.log("Rotina no EditarUsuario")
        console.log(usuario)
    },[data])

    return(
        
        <>
        <Helmet>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Editar Usuario</title>
        </Helmet>
        <section className="container">
            <div className="row"><Header /></div>
            {usuario &&
        <>
        <EditarRotina id={usuario._id} nome={usuario.nome} rotina={usuario.rotina} reload={reload} setReload={setReload}/>

        <Routes>
            <Route path='rotina/:id_rotina' element={<PopupEditarRotina setReload={setReload}/>}/>
        </Routes>
        
        
        </>
        }
        </section>
        
        
        
        </>
    )
}

export default EditarUsuario;
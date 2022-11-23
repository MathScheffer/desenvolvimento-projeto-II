import React, { useEffect, useRef, useState } from "react";
import { Outlet, Route, Routes, useParams } from "react-router-dom";
import RotinaUsuario from "../components/Usuario/rotinaUsuario";
import PopupRotinaUsuario from "../components/Usuario/popupRotinaUsuario";
import Header from "../components/header";
import useFetch from "../customHooks/useFetch";

const HomeUsuario = () => {
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
        <section className="container">
            <div className="row"><Header /></div>
            {usuario &&
        <>
        <RotinaUsuario id={usuario._id} nome={usuario.nome} rotina={usuario.rotina} reload={reload} setReload={setReload}/>

        <Routes>
            <Route path='rotina/:id_rotina' element={<PopupRotinaUsuario setReload={setReload}/>}/>
        </Routes>
        
        
        </>
        }
        </section>
        
        
        
        </>
    )
}

export default HomeUsuario;
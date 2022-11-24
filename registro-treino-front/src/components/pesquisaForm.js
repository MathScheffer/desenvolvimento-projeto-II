import React from 'react';

import requests from '../constants/requests';

import useFetch from "../customHooks/useFetch";
import { useEffect, useRef, useState} from "react"; 
import Button from "./button";
import { NavLink } from "react-router-dom";
import ResultadoPesquisa from "./resultadoPesquisa";

const PesquisaForm = ({triggerGetUsuarios, nome, setNome,...props}) => {
    let doDelete = useRef(false);

    const { data, loading, error, request } = useFetch();
  
    const [usuarios, setUsuarios] = useState([]);

    const [idUsuarioForDelete, setIdUsuarioForDelete] = useState();
    const [doDeleteIncrem, setDoDeleteIncrem] = useState(0);

    useEffect(() => {
        console.log(`Nome: ${nome}`)
        console.log(`Data antes da request: ${data}`)
        request(requests.GET_USUARIO_BY_NOME(nome))

    },[nome,triggerGetUsuarios]) 

    useEffect(() =>{
        console.log(error)
    },[error])

    useEffect(() => {
        console.log("Usuario for delete: " + idUsuarioForDelete)
        if(doDelete && idUsuarioForDelete) {

            const options = {
                'method':'DELETE',
                'headers':{
                    'Content-Type':'application/json'
                }
            }

            console.log("entrou na request")
            request(requests.DELETE_USUARIO(idUsuarioForDelete), options).then(resp => {
                console.log(resp)
            })
        }
    },[idUsuarioForDelete, doDeleteIncrem])
    
   useEffect(() => {
        if(data && data.length >= 0) {
            console.log(`Usuarios: ${usuarios}`)
            setUsuarios(data)

        }else if(data && data.message === 'Usuario excluido com sucesso!'){
            console.log("Entrou no usuario excluido")

            let newUsuarios = usuarios;
            let indexesUsuario = newUsuarios.map(usuario => usuario._id)

            newUsuarios.splice(indexesUsuario.indexOf(idUsuarioForDelete), 1)

            setUsuarios([...newUsuarios])
        }
        
    },[data]) 


    const handleChange = ({target}) => {
        setNome(target.value)
    } 

    const excluirUsuario = (idUsuario) => {
        setIdUsuarioForDelete(idUsuario);
        setDoDeleteIncrem( doDeleteIncrem => doDeleteIncrem + 1);
        
        doDelete = true;
    }

    return(
        <div  {...props}>
            <section id="pesquisa-form">
                <h2>Pesquisar Aluno</h2>
                <form action="">
                    <input 
                        value={nome}
                        onChange={handleChange}
                        type="search"
                        name="search" 
                        placeholder="nome" />
                </form>
                
                <ResultadoPesquisa 
                    usuarios={usuarios}
                    excluirUsuario={excluirUsuario}
                />
                
            </section>
            
        </div>
        
    )
}

export default PesquisaForm;
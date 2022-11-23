import React from "react";

import { useEffect, useRef, useState } from "react";
import requests from '../../constants/requests';
import useFetch from '../../customHooks/useFetch';
import EditarTreinoUi from "./editarTreinoUi";
        
const EditarTreino = ({exercicio, setReloadPopup}) => {
    const atributos = useRef();
    const putData = useRef(false);
    const deleteData = useRef(false);
    const [updateRequest, setUpdateRequest] = useState(0);
    const [deleteRequest, setDeleteRequest] = useState(0);
    
    const [form,setForm] = useState({
        carga: "",
        cargaAlcancada: "",
        repeticoesFeitas: ""
    })

    const {data, loading, error, request} = useFetch();

    useEffect(() => {
        const initiValues = {
            carga: exercicio.carga,
            cargaAlcancada: exercicio.cargaAlcancada,
            repeticoesFeitas: exercicio.repeticoesFeitas
        }

        setForm(initiValues)
    },[])

     useEffect(() => {
        if(putData.current){
            const body = form;
            const options = {
                'method':'PUT',
                'headers':{
                    'Content-Type':'application/json'
                },
                'body':JSON.stringify(body)
            }
            request(requests.PUT_EXERCICIO(exercicio._id), options)
            .then(response => {
                console.log(response)
                if(response.json && response.json.exercicio){
                    //setReloadPopup(reload => reload+1)
                }
            })
        }
    },[updateRequest])

    useEffect(() => {
        console.log(error)
    },[error])

    const onSubmit = (event) => {
        event.preventDefault();
    }

    const salvar = () => {
        putData.current = true;
        atributos.current.reset()
        setUpdateRequest(updateRequest => updateRequest + 1);
    }

    function handleChange({ target }) {
        const { id, value } = target;     
        console.log(id, value)   
        setForm({ ...form, [id]: value });
    }

    useEffect(() => {
      //  console.log(form)
    },[form])
    
    return(
        <>
            <EditarTreinoUi
                key={exercicio._id}
                atributos={atributos} 
                nome={exercicio.nome} 
                repeticoes={exercicio.repeticoes}
                series={exercicio.series}

                repeticoesFeitas={form.repeticoesFeitas}
                carga={form.carga}
                cargaAlcancada={form.cargaAlcancada}
                
                salvar={salvar}
                onSubmit={onSubmit}
                handleChange={handleChange}
            />
        </>
        
        
    )
}

export default EditarTreino;
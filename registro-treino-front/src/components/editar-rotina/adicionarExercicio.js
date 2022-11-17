import requests from '../../constants/requests';

import AdicionarExercicioUi from "./adicionarFormExercicioUi";
import useFetch from '../../customHooks/useFetch';
import { useEffect, useRef, useState } from "react";

const AdicionarExercicio = ({indexCard, apagarAddCard, idRotina, setReloadPopup}) => {
    const atributos = useRef()
    const doRequest = useRef(false);

    const {data, loading, error, request} = useFetch();
    const [addRequest, setAddRequest] = useState(0);

    const [form,setForm] = useState({})

    useEffect(() => {
        console.log(idRotina)
    },[idRotina])

    useEffect(() => {
        const body = limparChavesVazias();
        //console.log(body)

        const options = {
            'method':'PUT',
            'headers':{
                'Content-Type':'application/json'
            },
            'body':JSON.stringify(body)
        }
        if(doRequest.current){
            request(requests.PUT_ADD_EXERCICIO(idRotina), options)
            .then(response => {
                if(response.response.ok){
                    apagarAddCard(indexCard)
                    setReloadPopup(reload => reload + 1)
                }
            })
        }
    },[addRequest])

    useEffect(() => {
        console.log(error)
    },[error])
    useEffect(() => {
        console.log(indexCard)
    }, [indexCard])

    useEffect(() => {
       // console.log(form)
    },[form])

/**
 * limpa as chaves vazias do formulario, impedindo que um formulario com chaves vazias seja
 * enviado para a api
 * @returns void
 * 
 */
    const limparChavesVazias = () => {
        let body = form;

        for(var a in body){
            if(!body[a]){
                delete body[a]
            }
        }

        return body
    }
//apaga este componente
    const apagarCard = () => {
        apagarAddCard(indexCard)
    }
    
    const handleChange = ({ target }) => {
        const { id, value } = target;        
        setForm({ ...form, [id]: value });
    }

    const onSubmit = (event) => {
        event.preventDefault();
    }

    const salvar = () => {
        doRequest.current = true;
        
        setAddRequest(addRequest => addRequest + 1);
    }

    return(
        <AdicionarExercicioUi  
            nome={form.nome}
            repeticoes={form.repeticoes}
            series={form.series}
            onSubmit={onSubmit}
            handleChange={handleChange}
            atributos={atributos} 
            salvar={salvar}
            apagarCard={apagarCard}
        ></AdicionarExercicioUi>
    )
}

export default AdicionarExercicio;
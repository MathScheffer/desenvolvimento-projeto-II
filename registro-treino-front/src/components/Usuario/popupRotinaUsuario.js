import React from "react";

import { useContext, useEffect, useRef, useState } from "react";
import EditarTreino from "./editarTreino";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../customHooks/useFetch";

import requests from '../../constants/requests';

const PopupEditarRotina = ({setReload}) => {
    const navigate = useNavigate();

    const modalContainer = useRef();
    const botaoFechar = useRef();
    const botaoExcluir = useRef();
    const isAddCard = useRef(false);
    const doApagarRotina = useRef(false);
    const doRetirarRotina = useRef(false);
    const params = useParams()

    const [rotinaAtual, setRotinaAtual] = useState();
    const [modalAtivo, setModalAtivo] = useState(true)
    const [addCard, setAddCard] = useState(0);
    const [cardIndex, setCardIndex] = useState();
    const [apagarRotina, setApagarRotina] = useState(0);
    const [apagarCard, setApagarCard] = useState(0);
    const [formsAddList, setFormsAddList] = useState([]);
    const [reloadPopup, setReloadPopup] = useState(0);
    const [idUsuario, setIdUsuario] = useState();
    
    const {data, loading, error, request} = useFetch();

    useEffect(() => {
        request(requests.GET_ROTINA(params.id_rotina))
    },[reloadPopup])

    useEffect(() => {
       setRotinaAtual(data)
        
    },[data])

    const fecharModal = ({target}) => {
        if(target == modalContainer.current || 
            target == botaoFechar.current ){
            setModalAtivo(false);
            setFormsAddList([]);
            navigate("/usuario/" + params.id)
        }
    }
    
return(
    <>
    {(modalAtivo && rotinaAtual) && 
    <section id='modal-editar'  onClick={fecharModal} ref={modalContainer}> 
        <div className="container">
            <div className="row">
                <div className="popup-container-elements">
                <h1>{rotinaAtual.dia}</h1>
                </div>
            </div>

            <div className="row">
                {rotinaAtual.exercicios && rotinaAtual.exercicios.map( exercicio => {
                return <EditarTreino
                        //parâmetro KEY é extremamente obrigatório passar para o react reconhecer
                        //as mudanças!
                            key={exercicio._id}
                            exercicio={exercicio} 
                            setReloadPopup={setReloadPopup}
                        ></EditarTreino>
                    })
                }
            </div>

            <div className="row">
                 <div className="popup-container-elements">
                    <div className="grid-6">
                        <button ref={botaoFechar}>Fechar</button>   
                    </div>
                    <div className="grid-6">
                        <button>Imprimir</button>   
                    </div>
                </div>
            </div>
        </div>
    </section>
    }   
    </>   
)}

export default PopupEditarRotina;
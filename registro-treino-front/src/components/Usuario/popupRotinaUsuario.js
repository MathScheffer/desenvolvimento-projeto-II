import React from "react";

import { useContext, useEffect, useRef, useState } from "react";
import AdicionarExercicio from "./adicionarExercicio";
import ActionAdicionar from "./actionAdicionar";
import EditarExercicio from "./editarExercicio";
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

    useEffect(() => {
            if(isAddCard.current){
                setFormsAddList([...formsAddList,
                        <AdicionarExercicio 
                        indexCard={formsAddList.length}
                        key={formsAddList.length}
                        apagarAddCard={apagarAddCard}
                        setReloadPopup={setReloadPopup}
                        idRotina={params.id_rotina}
                    ></AdicionarExercicio>])
            }  
    }, [addCard])

    useEffect(() => {
        console.log(cardIndex)
        let newCards = formsAddList;
        let indexCardsArray = newCards.map(card => card.props.indexCard)

        newCards.splice(indexCardsArray.indexOf(cardIndex), 1)

        setFormsAddList([...newCards])
    }, [apagarCard])


    useEffect(() => {
        if(doApagarRotina.current){
            console.log("Entrou no hook de deletar a rotina")
            const options = {
                'method':'DELETE',
                'headers':{
                    'Content-Type':'application/json'
                }
            }
            request(requests.DELETE_ROTINA(rotinaAtual._id), options)
                .then(resp => {
                    console.log(resp)
                    if(resp.response.ok){

                        setModalAtivo(false);
                        setFormsAddList([]);
                        setReload(reload => reload + 1);
                        navigate("/editar/" + params.id +"/")
                    }
                })
        }
    },[apagarRotina])

    useEffect(() => {
        if(doRetirarRotina.current) {
            console.log("Entrou no hook de deletar a rotina do usuario")
            const body = {
                rotina: rotinaAtual._id
            }

            const options = {
                'method':'PUT',
                'headers':{
                    'Content-Type':'application/json'
                },
                'body': JSON.stringify(body)
            }
            request(requests.PUT_USUARIO_DECREMENTAR_ROTINA(idUsuario), options)
                .then(resp => {
                    console.log(resp)
                    if(resp.response.ok){
                        console.log(resp.json);
                        console.log("retirou a rotina do usuario!")
                        doApagarRotina.current = true;
                        setApagarRotina(apagarRotina => apagarRotina + 1)
                    }
                })
        }
    },[idUsuario])

    const apagarAddCard = (index) => {
        setCardIndex(index)
        setApagarCard(apagarCard => apagarCard + 1)
        //navigate("/editar/" + params.id)
    }

    const apagarRotinaClick = () => {


        doRetirarRotina.current = true;
        setIdUsuario(rotinaAtual.usuario);
    }

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
                return <EditarExercicio 
                        //parâmetro KEY é extremamente obrigatório passar para o react reconhecer
                        //as mudanças!
                            key={exercicio._id}
                            exercicio={exercicio} 
                            setReloadPopup={setReloadPopup}
                        ></EditarExercicio>
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
import { useContext, useEffect, useRef, useState } from "react";
import AdicionarExercicio from "./adicionarExercicio";
import ActionAdicionarExercicio from "./actionAdicionarExercicio";
import EditarExercicio from "./editarExercicio";
import EditarRotinaContext from "./editarRotinaContext";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../customHooks/useFetch";

import requests from '../../constants/requests';

const PopupEditarRotina = () => {
    const navigate = useNavigate();

    const modalContainer = useRef();
    const botaoFechar = useRef();
    const isAddCard = useRef(false);

    const params = useParams()

    const [rotinaAtual, setRotinaAtual] = useState();
    const [modalAtivo, setModalAtivo] = useState(true)
    const [addCard, setAddCard] = useState(0);
    const [cardIndex, setCardIndex] = useState();
    const [apagarCard, setApagarCard] = useState(0);
    const [formsAddList, setFormsAddList] = useState([]);
    const [reloadPopup, setReloadPopup] = useState(0);
    
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

    const apagarAddCard = (index) => {
        setCardIndex(index)
        setApagarCard(apagarCard => apagarCard + 1)
    }

    const fecharModal = ({target}) => {
        if(target == modalContainer.current || target == botaoFechar.current){
            setModalAtivo(false);
            setFormsAddList([]);
            navigate("/editar/" + params.id)
        }
    }
    
return(
    <>
    {(modalAtivo && rotinaAtual) && 
    <section id='modal-editar'  onClick={fecharModal} ref={modalContainer}> 
        <div className="container">
            <div className="row">
                <h1>{rotinaAtual.dia}</h1>
            </div>

            <div className="row">
                {rotinaAtual.exercicios.map( exercicio => {
                return <EditarExercicio 
                //parâmetro KEY é extremamente obrigatório passar para o react reconhecer
                //as mudanças!
                    key={exercicio._id}
                    exercicio={exercicio} 
                    setReloadPopup={setReloadPopup}
                ></EditarExercicio>
            })}
                {
                    formsAddList
                }
                <ActionAdicionarExercicio 
                isAddCard={isAddCard}
                setAddCard={setAddCard}></ActionAdicionarExercicio>
            </div>

            <div className="row">
                <div className="grid-6">
                    <button ref={botaoFechar}>Fechar</button>   
                </div>
                <div className="grid-6">
                    <button>Imprimir</button>   
                </div>
            </div>
        </div>
    </section>
    }   
    </>   
)}

export default PopupEditarRotina;
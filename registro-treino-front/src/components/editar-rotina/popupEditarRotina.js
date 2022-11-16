import { useContext, useEffect, useRef, useState } from "react";
import AdicionarExercicio from "./adicionarExercicio";
import ActionAdicionarExercicio from "./actionAdicionarExercicio";
import EditarExercicio from "./editarExercicio";
import EditarRotinaContext from "./editarRotinaContext";

const PopupEditarRotina = () => {
    const modalContainer = useRef();
    const botaoFechar = useRef();
    const isAddCard = useRef(false);

    const editarRotinaContext = useContext(EditarRotinaContext);
    const [addCard, setAddCard] = useState(0);
    const [cardIndex, setCardIndex] = useState();
    const [apagarCard, setApagarCard] = useState(0);
    const [formsAddList, setFormsAddList] = useState([]);
    const [reloadPopup, setReloadPopup] = useState(0);
    
    useEffect(() => {
        console.log('reload popup')
        editarRotinaContext.setReload(reload => reload + 1)
    },[reloadPopup])

    useEffect(() => {
            if(isAddCard.current){
                setFormsAddList([...formsAddList,
                    <AdicionarExercicio 
                    indexCard={formsAddList.length}
                    key={formsAddList.length}
                    apagarAddCard={apagarAddCard}
                    setReloadPopup={setReloadPopup}
                    setRotinaAtual={editarRotinaContext.setRotinaAtual}
                    idRotina={editarRotinaContext.rotinaAtual._id}
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
            editarRotinaContext.setModalAtivo(false);
            setFormsAddList([])
        }
    }
    
return(
    <>
    {editarRotinaContext.modalAtivo && 
    <section id='modal-editar'  onClick={fecharModal} ref={modalContainer}> 
        <div className="container">
            <div className="row">
                <h1>{editarRotinaContext.rotinaAtual.dia}</h1>
            </div>

            <div className="row">
                {
                    //PRECISO DAR UM JEITO DE ATUALIZAR ESTE CONTEXT (CARD)
                }
                {editarRotinaContext.rotinaAtual.exercicios.map( exercicio => {
                    return <EditarExercicio exercicio={exercicio} 
                            setReload={editarRotinaContext.setReload}></EditarExercicio>
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
    
)
}

export default PopupEditarRotina;
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
    const [formsAddList, setFormsAddList] = useState([]);
    
    useEffect(() => {

            if(isAddCard.current){
                console.log('entrou aqui')
                setFormsAddList([...formsAddList,<AdicionarExercicio 
                    indexCard={formsAddList.length - 1}
                    ></AdicionarExercicio>])
            }
           
            //row.push(<AdicionarExercicio setAddCards={setAddCard}></AdicionarExercicio>)
            
    }, [addCard])

    const apagarAddCard = (index) => {
        let newCards = formsAddList;
        newCards.slice(index, 1);

        setFormsAddList(newCards)
    }

    const fecharModal = ({target}) => {
        if(target == modalContainer.current || target == botaoFechar.current){
            editarRotinaContext.setModalAtivo(false);
        }
    }

    const adicionarCards = () => {
        const row = []
        for(let i = addCard; i > 0; i--){
            row.push(<AdicionarExercicio 
                setAddCards={setAddCard}
                apagarAddCard={apagarAddCard}
            ></AdicionarExercicio>)
        }

        return row
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
import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import EditarRotinaContext from "./editarRotinaContext";

const CardRotinaUi = ({rotina}) => {
    const editarRotinaContext = useContext(EditarRotinaContext);

    useEffect(() => {
        editarRotinaContext.setRotinaAtual(rotina)
    },[rotina])
    
    const setarModal = () => {
        editarRotinaContext.setModalAtivo( !editarRotinaContext.modalAtivo);
        editarRotinaContext.setRotinaAtual(rotina)
    }

    return(
        <div className='card-rotina-container' onClick={setarModal}>
            <div className="card-rotina">
                <div className="centro">
                    <Link to="">{rotina.dia}</Link>
                </div>
            </div>
        </div>
    )
}

export default CardRotinaUi;
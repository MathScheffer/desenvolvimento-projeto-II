import CardRotinaUi from "./cardRotinaUi";
import OrdenacaoDias from "../../utils/ordenacaoDias";
import EditarRotinaContext from './editarRotinaContext';
import PopupEditarRotina from "./popupEditarRotina";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EditarRotina = ({nome,rotina, reload, setReload}) => {
    const navigate = useNavigate();
    //const [rotinaOrdenada, setRotinaOrdenada] = useState();
    const rotinaOrdenada = new OrdenacaoDias(rotina).getRotinaOrdenada();
    const [modalAtivo, setModalAtivo] = useState(false);
    const [rotinaAtual, setRotinaAtual] = useState();

    useEffect(() => {
        console.log("Rotina no EditarRotina")
        console.log(rotina)
        
    },[rotina])

    return(
        <>
        <h1>{nome}</h1>
        
        <div className="container">
            <div className="row card-container-rotina-row">
                    {rotinaOrdenada ? 
                    rotinaOrdenada.map(rotinaOrdenada => {
                        return (
                            <CardRotinaUi 
                                key={rotinaOrdenada._id} 
                                rotina={rotinaOrdenada}
                            />
                        )
                    }) : rotina.map(rotina => {
                        return (
                            <CardRotinaUi 
                                key={rotina._id} 
                                rotina={rotina}
                            />
                        )
                    })
                    }
            </div>
        </div>
        </>
    )
}

export default EditarRotina;
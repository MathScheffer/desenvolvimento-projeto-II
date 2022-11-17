import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import EditarRotinaContext from "./editarRotinaContext";

const CardRotinaUi = ({rotina}) => {
    const navigate = useNavigate();


    const onClick = () => {
        navigate(`rotina/${rotina._id}`)
    }

    return(
        <div className='card-rotina-container' onClick={onClick}>
            <div className="card-rotina">
                <div className="centro">
                    <Link to={`rotina/${rotina._id}`}>{rotina.dia}</Link>
                </div>
            </div>
        </div>
    )
}

export default CardRotinaUi;
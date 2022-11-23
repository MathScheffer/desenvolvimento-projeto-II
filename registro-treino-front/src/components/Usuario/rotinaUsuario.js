import React from "react";

import CardRotinaUi from "./cardRotinaUi";
import OrdenacaoDias from "../../utils/ordenacaoDias";
import { useEffect, useRef, useState } from "react";

const RotinaUsuario = ({ nome,rotina }) => {
    const rotinaOrdenada = new OrdenacaoDias(rotina).getRotinaOrdenada();
    
    useEffect(() => {
        console.log("Rotina no RotinaUsuario")
        console.log(rotina)
        
    },[rotina])

    return(
        <>
        <h1>{nome}</h1>
        
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
        </>
    )
}

export default RotinaUsuario;
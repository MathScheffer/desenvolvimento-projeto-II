import AdicionarExercicioUi from "./adicionarFormExercicioUi";
import useFetch from '../../customHooks/useFetch';
import { useEffect, useState } from "react";

const AdicionarExercicio = ({indexCard, apagarAddCard}) => {
    const {data, loading, error, request} = useFetch();
    const [apagar, setApagar] = useState(0);

    useEffect(() => {
        console.log(indexCard)
    }, [indexCard])

    useEffect(() => {
        if(apagar){
        }
    },[apagar])

    const apagarCard = () => {
        setApagar(apagar => apagar+1);
    }
    
    return(
        <AdicionarExercicioUi apagarCard={apagarAddCard}></AdicionarExercicioUi>
    )
}

export default AdicionarExercicio;
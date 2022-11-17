import { useEffect, useRef, useState } from "react";
import requests from '../../constants/requests';
import useFetch from '../../customHooks/useFetch';
import EditarExercicioUi from "./editarExercicioUi";
/*     
    
    const [aberto, setAberto] = useState(true);

const toggle = () => {

        if(aberto){
            atributos.current.classList.remove("display-block")
            setAberto(false)
        }else{
            atributos.current.classList.add("display-block")
            setAberto(true)
        }
    } */

    //<button onClick={toggle}>{exercicio.nome}</button>
                
const EditarExercicio = ({exercicio, setReloadPopup}) => {
    const atributos = useRef();
    const putData = useRef(false);
    const deleteData = useRef(false);
    const [updateRequest, setUpdateRequest] = useState(0);
    const [deleteRequest, setDeleteRequest] = useState(0);
    
    const [form,setForm] = useState({
        nome: "",
        repeticoes: "",
        series: "",
        carga: "",
        cargaAlcancada: "",
        repeticoesFeitas: ""
    })

    const {data, loading, error, request} = useFetch();

    useEffect(() => {
        const initiValues = {
            nome: exercicio.nome,
            repeticoes: exercicio.repeticoes,
            series: exercicio.series,
            carga: exercicio.carga,
            cargaAlcancada: exercicio.cargaAlcancada,
            repeticoesFeitas: exercicio.repeticoesFeitas
        }

        setForm(initiValues)
    },[])

     useEffect(() => {
        if(putData.current){
            const body = form;
            const options = {
                'method':'PUT',
                'headers':{
                    'Content-Type':'application/json'
                },
                'body':JSON.stringify(body)
            }
            request(requests.PUT_EXERCICIO(exercicio._id), options)
            .then(response => {
                console.log(response)
                if(response.json && response.json.exercicio){
                    //setReloadPopup(reload => reload+1)
                }
            })
        }
    },[updateRequest])

    useEffect(() => {
        const options = {
            'method':'DELETE',
            'headers':{
                'Content-Type':'application/json'
            }

        }

        if(deleteData.current){
            console.log(`Exercicio id: ${exercicio._id}`)
            console.log(`Exercicio nome: ${exercicio.nome}`)
            request(requests.DELETE_EXERCICIO(exercicio._id), options)
            .then(response => {
                console.log(response)
                if(response.response.ok === true){
                    
                    setReloadPopup(reload => reload + 1)
                }
            })
        }
        
    }, [deleteRequest])

    useEffect(() => {
        console.log(error)
    },[error])

    const onSubmit = (event) => {
        event.preventDefault();
    }

    const salvar = () => {
        putData.current = true;
        atributos.current.reset()
        setUpdateRequest(updateRequest => updateRequest + 1);
    }

    const excluir = () => {
        deleteData.current = true;
        setDeleteRequest(deleteRequest => deleteRequest + 1);
    }

    function handleChange({ target }) {
        const { id, value } = target;        
        setForm({ ...form, [id]: value });
    }

    useEffect(() => {
      //  console.log(form)
    },[form])
    
    return(
        <>
        {/*fetchedData ? 
            <EditarExercicioUi
                atributos={atributos} 
                nome={fetchedData.nome} 
                repeticoes={fetchedData.repeticoes}
                series={fetchedData.series}
                salvar={salvar}
                onSubmit={onSubmit}
                key={fetchedData._id}
                handleChange={handleChange}
            />
            : 
            <EditarExercicioUi
                atributos={atributos} 
                nome={exercicio.nome} 
                setNome={setNome}
                repeticoes={exercicio.repeticoes}
                series={exercicio.series}
                salvar={salvar}
                onSubmit={onSubmit}
                key={exercicio._id}
                handleChange={handleChange}
            />
    */}
            <EditarExercicioUi
                atributos={atributos} 
                nome={form.nome} 
                repeticoes={form.repeticoes}
                repeticoesFeitas={form.repeticoesFeitas}
                series={form.series}
                carga={form.carga}
                cargaAlcancada={form.cargaAlcancada}
                salvar={salvar}
                excluir={excluir}
                onSubmit={onSubmit}
                id={exercicio._id}
                key={exercicio._id}
                handleChange={handleChange}
            />
        </>
        
        
    )
}

export default EditarExercicio;
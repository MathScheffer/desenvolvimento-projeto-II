import { useEffect, useRef, useState } from "react";
import useFetch from "../customHooks/useFetch";
import Mensagem from "./mensagem";
import TratamentoErros from '../utils/tratamentoErros';

const CadastroForm = (props) => {

    const { data, loading, error, request } = useFetch();
    const [submitTrigger, setSubmitTrigger] = useState();
    const [mensagem, setMensagem] = useState('');

    let doRequest = useRef(false);
    const formRef = useRef();

    const [form,setForm] = useState({
        nome:""    ,
        sobrenome:"",
        idade:"",
        peso:'',
        objetivo:'',
        whatsapp:'',
        senha:'',
        role:''
    })

    useEffect(() => {
        const URL = "http://localhost:3000/api/usuarios/";
        const body = form;
        const options = {
            'method':'POST',
            'headers':{
                'Content-Type':'application/json'
            },
            'body':JSON.stringify(body)
        }
        if(doRequest.current===true){
            request(URL,options)
        }
        
     //   return() => {doRequest = false}
        //console.log(doRequest.current)
    },[submitTrigger])


    useEffect(() => {
       console.log(`Data: ${data}`)
    },[data])

    useEffect(() => {
      if(error){
        setMensagem(new TratamentoErros(error).mensagemErro())
      }
      console.log(mensagem)
    },error)

    useEffect(() =>{
       // console.log("Form: "+form);
    },[form])
    


    function handleSubmit(event) {
        event.preventDefault();
        console.log(`Formulario enviado: ${JSON.stringify(form)}`);

        const novoNome = form.nome + " " + form.sobrenome;
        const senha = form.nome + "." + form.sobrenome;
        

        setForm((form) => {
            const novoForm = form
            novoForm.senha = senha
            novoForm.nome = novoNome

            return novoForm
        })

        setSubmitTrigger((submitTrigger) => submitTrigger !== undefined ? submitTrigger + 1 : 1);

        formRef.current.reset()

        doRequest.current = true;
    }

    function handleChange({ target }) {
        const { id, value } = target;
        setForm({ ...form, [id]: value });
    }


    return(
        <div  {...props}>
            {error && <Mensagem tipo='danger' conteudo={`${mensagem}`}/>
            }
            {data && <Mensagem tipo='sucess' conteudo='Usuario adicionado com suceso!' />}
            
            <section id="pesquisa-form">
                <h2>Cadastrar Aluno</h2>

                <form onSubmit={handleSubmit} ref={formRef}>
                    <input onChange={handleChange} required type="text" id="nome"     name="nome"     placeholder="nome" />
                    <input onChange={handleChange} required type="text" id="sobrenome"     name="sobrenome"     placeholder="sobrenome" />
                    <input onChange={handleChange} required type="text" id="idade"    name="idade"    placeholder="idade"/>
                    <input onChange={handleChange} required type="text" id="peso"     name="peso"     placeholder="peso"/>
                    <input onChange={handleChange} required type="text" id="objetivo" name="objetivo" placeholder="objetivo"/>
                    <input onChange={handleChange} required type='text' id='whatsapp' name='whatsapp' placeholder="Whatsapp"/>
                    <input onChange={handleChange} required type='text' id='role' name='atributo' placeholder="Atributo"/>

                    <button>Cadastrar</button>
                </form>
                
                {loading && <p>Carregando</p>}
            </section>
        </div>
    )
}

export default CadastroForm;
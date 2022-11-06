 import useFetch from "../customHooks/useFetch";
import { useEffect, useRef, useState} from "react"; 
import Button from "./button";

const PesquisaForm = (props) => {
    const { data, loading, error, request } = useFetch();
    const [nome,setNome] = useState("");
    const [usuarios, setUsuarios] = useState([]);
    //const inputPesquisa = useRef();

    useEffect(() => {
        console.log(`Nome: ${nome}`)
        console.log(`Data antes da request: ${data}`)
        request('http://localhost:3000/api/usuarios/query?nome='+nome)

    },[nome]) 
    
   useEffect(() => {
        console.log(`Usuarios: ${usuarios}`)
        setUsuarios(data)
    },[data]) 


    const handleChange = ({target}) => {
        setNome(target.value)
    } 

    return(
        <div  {...props}>
            <section id="pesquisa-form">
                <h2>Pesquisar Aluno</h2>
                <form action="">
                    <input 
                        value={nome}
                        onChange={handleChange}
                        type="search"
                        name="search" 
                        placeholder="nome" />
                </form>
                
                <div id="resultado">
                    <ul>
                        { usuarios && usuarios.map( usuario =>
                             <li key={usuario.id}>
                                <span>{usuario.nome}</span> 
                                <span>
                                    <Button titulo="editar"/>
                                    <Button titulo="excluir"/>
                                </span>
                             </li>
                        )}
                    </ul>
                </div>

                <ol>
                    <li>Criar componente para avisar "Uusário não encontrado!";</li>
                    <li>Criar componentes nas listas para fazer o crud do usuário;</li>
                    <li>Fazer sumir os formularios quando chegar em mobile</li>
                    <li>Criar botoes para mostrar os displays dos formulrarios</li>
                    <li>Estilizar os botoes</li>
                    <li>Ajeitar o logo do header</li>
                </ol>
            </section>
            
        </div>
        
    )
}

export default PesquisaForm;
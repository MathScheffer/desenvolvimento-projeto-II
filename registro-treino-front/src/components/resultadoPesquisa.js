import PesquisaContext from "../contexts/pesquisaContext"
import { useContext } from "react"
const ResultadoPesquisa = () => {
    
    return (
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
    )
}

export default ResultadoPesquisa
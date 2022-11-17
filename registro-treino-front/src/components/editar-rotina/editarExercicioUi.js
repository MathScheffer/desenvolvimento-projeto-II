const EditarExercicioUi = ({atributos, 
    nome, 
    series, 
    repeticoes, 
    repeticoesFeitas,
    carga,
    cargaAlcancada,
    onSubmit, 
    salvar,
    excluir,
    handleChange
}) => {
    return(
        <div className='editar-exercicio'>

        <form onSubmit={onSubmit} className="opcoes-container display-block" ref={atributos}>
            <input 
                placeholder={nome} 
                id="nome"
                className="name-input" 
                value={nome}
                onChange={handleChange}
            />

            <input 
                id="series"
                placeholder={series}  
                value={series}
                onChange={handleChange}
            />
            <input 
                id="repeticoes"
                placeholder={repeticoes}  
                value={repeticoes}
                onChange={handleChange}
            />
            <input 
                id="carga"
                placeholder={carga}  
                value={carga}
                onChange={handleChange}
            />
            <input 
                id="cargaAlcancada"
                placeholder={cargaAlcancada}  
                value={cargaAlcancada}
                onChange={handleChange}
            />
            <input 
                id="repeticoesFeitas"
                placeholder={repeticoesFeitas}  
                value={repeticoesFeitas}
                onChange={handleChange}
            />
            <div className="container-buttons">
                <button onClick={salvar}>Salvar</button>
                <button onClick={excluir}>Excluir</button>
            </div>
        </form>
    </div>
    
    )
}

export default EditarExercicioUi;
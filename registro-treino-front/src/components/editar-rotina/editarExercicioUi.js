const EditarExercicioUi = ({atributos, 
    nome, 
    series, 
    repeticoes, 
    repeticoesFeitas,
    carga,
    cargaAlcancada,
    id,
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
            <label data-serie='Serie(S)'>
                <input 
                    id="series"
                    placeholder={series}  
                    value={series}
                    onChange={handleChange}
                />
            </label>
            <label data-repeticoes='Repetições(R)'>
            <input 
                id="repeticoes"
                placeholder={repeticoes}  
                value={repeticoes}
                onChange={handleChange}
            />
            </label>
            
            <label data-carga='Carga(C)'>
                <input 
                    id="carga"
                    placeholder={carga}  
                    value={carga}
                    onChange={handleChange}
                />
            </label>
            <label data-cargaalcan='Carga Alcançada(CA)'>
                <input 
                    id="cargaAlcancada"
                    placeholder={cargaAlcancada}  
                    value={cargaAlcancada}
                    onChange={handleChange}
                />
            </label>
            <label data-repeticoesf='Repetições feitas(RF)'>
                <input 
                    id="repeticoesFeitas"
                    placeholder={repeticoesFeitas}  
                    value={repeticoesFeitas}
                    onChange={handleChange}
                />
            </label>
            
            <div className="container-buttons">
                <button onClick={salvar}>Salvar</button>
                <button onClick={excluir}>Excluir</button>
            </div>
        </form>
    </div>
    
    )
}

export default EditarExercicioUi;
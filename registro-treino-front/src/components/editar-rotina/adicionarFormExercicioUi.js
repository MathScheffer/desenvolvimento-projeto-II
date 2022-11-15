const AdicionarExercicioUi = ({atributos, 
    nome, 
    series, 
    repeticoes, 
    carga,
    onSubmit, 
    salvar,
    apagarCard,
    handleChange
}) => {
    return(
        <div className='adicionar-exercicio'>
            
        <button onClick={apagarCard} className="apagar-adicionar-exercicio-card">x</button>
        
        <form onSubmit={onSubmit} className="opcoes-container display-block" ref={atributos}>
            <input 
                id="nome"
                className="name-input" 
                value={nome}
                onChange={handleChange}
            />

            <input 
                id="series"
                value={series}
                onChange={handleChange}
            />
            <input 
                id="repeticoes" 
                value={repeticoes}
                onChange={handleChange}
            />
            <input 
                id="carga" 
                value={carga}
                onChange={handleChange}
            />

            <button onClick={salvar}>Salvar</button>
        </form>
    </div>
    
    )
}

export default AdicionarExercicioUi;
const AdicionarExercicioUi = ({atributos, 
    nome, 
    series, 
    repeticoes, 
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
                required
                id="nome"
                className="name-input" 
                value={nome}
                onChange={handleChange}
            />

            <input 
            required
                id="series"
                value={series}
                onChange={handleChange}
            />
            <input 
            required
                id="repeticoes" 
                value={repeticoes}
                onChange={handleChange}
            />

            <button onClick={salvar}>Salvar</button>
        </form>
    </div>
    
    )
}

export default AdicionarExercicioUi;
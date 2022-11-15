const ActionAdicionarExercicio = ({setAddCard, isAddCard}) => {

    const onClick = () => {
        setAddCard(addCards => addCards+1);
        isAddCard.current = true;
    }
    return(
        <div className='card-adicionar-exercicio' onClick={onClick}>
            <div className="card-rotina">
                <div className="centro">
                    +
                </div>
            </div>
        </div>
    )
}

export default ActionAdicionarExercicio;
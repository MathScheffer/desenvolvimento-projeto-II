const CadastroForm = (props) => {
    return(
        <div  {...props}>
            <section id="pesquisa-form">
                <h2>Cadastrar Aluno</h2>
                <form action="">
                    <input type="text" name="nome" placeholder="nome" />
                    <input type="text" name="idade" placeholder="idade"/>
                    <input type="text" name="peso" placeholder="peso"/>
                    <input type="text" name="objetivo" placeholder="objetivo"/>
                    <input type='text' name='whatsapp' placeholder="Whatsapp"/>
                    <button>Cadastrar</button>
                </form>
            </section>
            
        </div>
        
    )
}

export default CadastroForm;

const Mensagem = ({tipo, conteudo}) => {

    return (
        <section id='mensagem' class={tipo}>
            <p>{conteudo}</p>
        </section>
    )
}

export default Mensagem;
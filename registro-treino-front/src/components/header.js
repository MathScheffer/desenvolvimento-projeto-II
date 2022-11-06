import Button from "./button";


const Header = () => {

    return(
        <header class='container' id="Header">
            <section id="logo" class="grid-6">
                Logo da empresa
            </section>
            <section id='logoff' class="grid-6">
                <Button titulo='Sair'/>
            </section>
        </header>
    )
}

export default Header;
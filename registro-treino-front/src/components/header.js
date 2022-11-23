import React from "react";

import { NavLink } from "react-router-dom";
import Button from "./button";


const Header = () => {

    return(
        <header className='container' id="Header">
            <section id="logo" className="grid-6">
                <NavLink end to={"/"}>Logo da empresa</NavLink>
            </section>
            <section id='logoff' className="grid-6">
                <Button titulo='Sair'/>
            </section>
        </header>
    )
}

export default Header;
import React  from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';

import CadastroForm from '../components/cadastroForm';
import Header from '../components/header';
import PesquisaForm from '../components/pesquisaForm';

import '../css/style.css';

const Home = () => {

    
    return (
        //<div class='grid grid-template' id='Home'>
        <div class="container">
            <div class='row'>
                <Header/>
            </div>
            <h1>Bem-Vindo!</h1>
            <h2>Refatore colocando um "HomeStorage" para gerenciar os dados!</h2>
            <div class='row'>
                
                <CadastroForm class="grid-5"></CadastroForm>
                <div class="grid-2"></div>
                <PesquisaForm class='grid-5'></PesquisaForm>
            </div>
        </div>

    )
}

export default Home;
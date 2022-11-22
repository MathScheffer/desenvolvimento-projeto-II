import React  from 'react';
import '../css/style.css'

const LoginForm = () => {

  return (
    <div className='container'>
        <section id="login-form">
            <div className='content'>
                <h1>Bem Vindo!</h1>
            {//data && data.map(rotina => <p key={rotina['_id']}>{rotina.dia}</p>)
            }
                <div className='form-login-container'>
                    <form class="loginForm">
                        <input name="nome" placeholder='nome'/>
                        <input name="senha" placeholder='senha'/>
                        <button>Logar</button>
                    </form>
                </div>
            </div>
        </section>
    </div>
  );
}

export default LoginForm;
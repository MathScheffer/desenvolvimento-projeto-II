import React  from 'react';
import '../css/style.css'

const LoginFormUi = ({handleChange, onSubmit, usuario, senha, logar}) => {

  return (
    <div className='container'>
        <section id="login-form">
            <div className='content'>
                <h1>Bem Vindo!</h1>

                <div className='form-login-container'>
                    <form className="loginForm" 
                    onSubmit={onSubmit}
                    >
                        <input 
                            id='usuario'
                            name="usuario" 
                            value={usuario}
                            placeholder='usuario'
                            onChange={handleChange}
                        />
                        <input 
                            id='senha'
                            name="senha" 
                            value={senha}
                            placeholder='senha'
                            onChange={handleChange}    
                        />

                        <button onClick={logar}>Logar</button>
                    </form>
                </div>
            </div>
        </section>
    </div>
  );
}

export default LoginFormUi;
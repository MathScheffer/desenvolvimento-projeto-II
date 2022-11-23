import React, { useEffect, useRef, useState }  from 'react';
import LoginFormUi from '../components/loginFormUi';
import useFetch from '../customHooks/useFetch';
import Utils from '../utils/Utils';
import requests from '../constants/requests'

const Login = () => {
    const canLogin = useRef(false);

    const [loginTrigger, setLoginTrigger] = useState(0);
    const {data, loading, error, request} = useFetch()
    const [form, setForm] = useState({
        usuario: '',
        senha: ''
    });

    useEffect(() => {
        if(canLogin.current){
            const body = Utils.imparChavesVazias(form);

            const options = {
                'method':'POST',
                'headers':{
                    'Content-Type':'application/json'
                },
                'body': JSON.stringify(body)
            }
    
            request(requests.POST_TOKEN(), options)
        }
    },[loginTrigger])

    useEffect(() => {
        console.log(data)
        if(data && data.token){
            localStorage.setItem('token',data.token)
        }
    }, [data])

    useEffect(() => {
        console.log(error)
    },[error])
    
    useEffect(() => {
        console.log(form)
    },[form])

    const onSubmit = (event) => {
        event.preventDefault();
    }

    const handleChange = ({target}) => {
        const {id, value} = target;
            
        setForm({ ...form, [id]: value });
    }

    const logar = () => {
        canLogin.current = true;
        setLoginTrigger(loginTrigger => loginTrigger + 1);
    }

    return (
        <LoginFormUi
            handleChange={handleChange}
            onSubmit={onSubmit}
            usuario={form.usuario}
            senha={form.senha}
            logar={logar}
        ></LoginFormUi>
    )
}

export default Login;
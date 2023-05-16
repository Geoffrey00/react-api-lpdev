// Genral imports
// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from 'react';

import Input from '../Input/Input'
import getUser from '../../Hook/Query/useGetUser'

// Style imports
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({setIsLogged}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const handleSubmitForm = async(event) => {
        event.preventDefault();
        getUser(email, password, navigate, setIsLogged)
    };


    const style = {
        button:{
            backgroundColor:'#89CFF0',
            border:'none',
            padding:'10px',
            marginTop:'10px',
            color:'white',
            cursor:'pointer',
        },
        form:{
            margin:'100px auto',
            width:'fit-content',
            textAlign:'center'
        }
    }
    

    return (
        <>
            <form id="login-form" onSubmit={handleSubmitForm}  style={style.form}>

                <div className='credentials-and-password-container'>
                    <Input placeholder={'Email'} type={'text'} handleChange={(e) => setEmail(e.target.value)} />
                    <Input placeholder={'Mot de passe'} type={'password'} handleChange={(e) => setPassword(e.target.value)}/>
                    <button
                        className='login-page-call-to-action'
                        type="submit"
                        style={style.button}
                    >
                        Se connecter
                    </button>

                </div>
            </form>
        </>
    );
};

export default LoginForm;

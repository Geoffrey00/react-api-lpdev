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
    //TODO Add Credentials Inputs (With Input Component)
    return (
        <>
            <form id="login-form" onSubmit={handleSubmitForm}>

                <div className='credentials-and-password-container'>
                    <Input placeholder={'Email'} type={'text'} handleChange={(e) => setEmail(e.target.value)} />
                    <Input placeholder={'Mot de passe'} type={'password'} handleChange={(e) => setPassword(e.target.value)}/>
                    <button
                        className='login-page-call-to-action'
                        type="submit"
                    >
                        Submit
                    </button>

                </div>
            </form>
        </>
    );
};

export default LoginForm;

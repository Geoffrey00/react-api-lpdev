import axios from 'axios';
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation  } from "react-router-dom";

export const getUser = (email, password, navigate, setIsLogged) => {
    axios
        .post('http://127.0.0.1:8000/api/login_check', {
            email, 
            password
        }
        )
        .then(function (response) {
            window.localStorage.setItem('token', response.data.token)
            navigate('/')
            setIsLogged(true)
        });
}

export default getUser

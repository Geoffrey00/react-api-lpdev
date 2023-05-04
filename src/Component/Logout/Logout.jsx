import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate  } from "react-router-dom";

const Logout = ({setIsLogged}) => {
window.localStorage.removeItem('token')

const navigate = useNavigate()

useEffect(() => {
    setIsLogged(false)
    navigate('/login')
}, [])

};

export default Logout
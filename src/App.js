import './App.css';
import { BrowserRouter, Routes, Route, Navigate, useNavigate  } from "react-router-dom";
import Home from './Page/Home/Home'
import Login from './Page/Login/LoginPage'
import Logout from './Component/Logout/Logout'
import Layout from './Component/Layout/Layout'
import { useEffect, useState } from 'react';

export function RequireAuth({ children }) {
    // Used to ensure the refreshToken is called once at a time
    const user = window.localStorage.getItem('token')
    const navigate = useNavigate();

    if (user === null) {
        return <Navigate to="/login" replace={true} />
    } else {
        return children;
    }
}

function App() {

const [isLogged, setIsLogged] = useState(false)

useEffect(() => {
  if(window.localStorage.getItem('token')){
    setIsLogged(true)
  }
}, [])

//Navigation dans requireAuth
  return (
      //TODO ROUTER
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout isLogged={isLogged} />}>
          <Route index element={
                <RequireAuth>
                    <Home />
                </RequireAuth>
            } />
            <Route path="/login" element={<Login  setIsLogged={setIsLogged}  />} />
            <Route path="/logout" element={<Logout  setIsLogged={setIsLogged} />} />
        </Route>  
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Outlet, Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from 'react';

const Layout = ({isLogged}) => {


    const [login, setLogin] = useState(null)

    useEffect(() => {

        if(!isLogged){
            setLogin(<Link to="/login">Login</Link>)
        } else {
            setLogin(<Link to="/logout">Logout</Link>)
        }
    }, [isLogged])


  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {login}
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
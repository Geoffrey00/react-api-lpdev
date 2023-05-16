import { Outlet, Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from 'react';

const Layout = ({isLogged}) => {


    const [login, setLogin] = useState(null)

    useEffect(() => {

        if(!isLogged){
            setLogin(<Link style={style.a} to="/login">Login</Link>)
        } else {
            setLogin(<Link style={style.a} to="/logout">Logout</Link>)
        }
    }, [isLogged])


    const style = {
      nav:{
        display:'flex',
        padding:'10px 50px',
        background:'#89CFF0',
        color:'white',
        justifyContent:'space-between',
        alignItems:'center'
      },
      ul:{
        display:'flex',
      },
      li:{
        listStyle:'none',
        marginLeft:'50px',
        textTransform:'uppercase',
      },
      a: {
        ':visited': {
          color: 'white'
        }
      }
    }

  return (
    <>
      <nav style={style.nav}>
        <p>React with symfony</p>
        <ul style={style.nav}>
          <li style={style.li}>
            <Link style={style.a} to="/">Home</Link>
          </li>
          <li style={style.li}>
            {login}
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
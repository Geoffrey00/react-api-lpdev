import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Page/Home/Home'
import Login from './Page/Login/LoginPage'

export function RequireAuth({ children }) {
    // Used to ensure the refreshToken is called once at a time
    const user = 'ok'; // TODO Get user from local storage

    if (user === null) {
        //TODO Navigate to login
    } else {
        return children;
    }
}

function App() {

//Navigation dans requireAuth
  return (
      //TODO ROUTER
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

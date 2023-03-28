import './App.css';
import { BrowserRouter, Routes, Route, Navigate, useNavigate  } from "react-router-dom";
import Home from './Page/Home/Home'
import Login from './Page/Login/LoginPage'

export function RequireAuth({ children }) {
    // Used to ensure the refreshToken is called once at a time
    const user = null
    const navigate = useNavigate();

    if (user === null) {
        return <Navigate to="/login" replace={true} />
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
        <Route path="/" element={
            <RequireAuth>
                <Home />
            </RequireAuth>
        } />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

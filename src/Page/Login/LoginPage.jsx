import LoginForm from "../../Component/LoginForm/LoginForm";
import {useState, useEffect} from "react";
import getUser from '../../Hook/Query/useGetUser'


const LoginPage = ({setIsLogged}) => {

    const [ formSubmitting, setFormSubmitting ] = useState(false);
    
    
    return(
        <div>
            
            <LoginForm
                setIsLogged={setIsLogged}
            />

        </div>
    )
}

export default LoginPage;
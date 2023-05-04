import LoginForm from "../../Component/LoginForm/LoginForm";
import {useState, useEffect} from "react";
import getUser from '../../Hook/Query/useGetUser'


const LoginPage = () => {

    const [ formSubmitting, setFormSubmitting ] = useState(false);
    const handleSubmit = async (credentials) => {
        setFormSubmitting(true);
        try {
           
        } catch (error) {
            console.log(error);
            // message
        } finally {
            setFormSubmitting(false);
        }
    };

    return(
        <div>
            
            <LoginForm
                handleSubmit={handleSubmit}
            />

        </div>
    )
}

export default LoginPage;
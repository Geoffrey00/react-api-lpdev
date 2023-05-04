import axios from 'axios';

export const getUser = (email, password) => {
    axios
        .post('http://127.0.0.1:8000/api/login_check', {
            email, 
            password
        }
        )
        .then(function (response) {
            window.localStorage.setItem('token', response.data.token)
            console.log(window.localStorage);
        });
}

export default getUser

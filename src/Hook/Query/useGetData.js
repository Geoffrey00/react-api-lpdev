import axios from 'axios';

const getData = () => {

    const token = window.localStorage.getItem('token')

    axios
        .get('http://127.0.0.1:8000/api/cats', {
            headers: {
                'Authorization' : 'Bearer ' .concat(token),
            }        
        }
        )
        .then(function (response) {
            console.log(response);
        });
}

export default getData
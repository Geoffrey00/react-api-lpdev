import axios from 'axios';

const getData = async (setData) => {

    const token = window.localStorage.getItem('token')

    axios
        .get('http://127.0.0.1:8000/api/cats', {
            headers: {
                'Authorization' : 'Bearer ' + token,
            }        
        }
        )
        .then(function (response) {
            setData(response)
        });
}

export default getData
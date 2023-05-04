import { useEffect } from "react";
import { Navigate, useNavigate  } from "react-router-dom";
import getData from "../../Hook/Query/useGetData";
    

const HomePage = () => {

    const token = window.localStorage.getItem('token')

    useEffect(() => {
        getData()
    })

    return(
        <div>
            Home page
        </div>
    )
}

export default HomePage;
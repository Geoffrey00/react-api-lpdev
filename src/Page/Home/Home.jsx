import { useEffect, useState } from "react";
import { Navigate, useNavigate  } from "react-router-dom";
import getData from "../../Hook/Query/useGetData";
    

const HomePage = () => {

    const token = window.localStorage.getItem('token')

    const [data, setData] = useState(null);  

    const getDataFunction = async () => {
        await getData(setData) 
        console.log(data);
   }

 
    useEffect(() => {

       getDataFunction()
        
    }, [])

    const style = {
        ul: {
            display:'flex',
            flexWrap:'wrap'
        },
        li:{
            listStyle:'none',
            display:'flex',
            margin:'50px',
            textAlign:'center',
            flexDirection:'column'
        },
        img :{
            maxWidth : '300px',
            width:'300px',
            minHeight :'300px',
            height:'300px',
            objectFit :'cover'
        }
    }


    return(
        <div>  
            <p>Vous êtes connecté !</p>
            <p>Liste des chats :  </p> 
            {data ?
            <ul style={style.ul}>
                {data.data['hydra:member'].map((item) => 
                     <li style={style.li} key={item.id}>
                        <img style={style.img} src={item.image_link} alt="" />
                        {item.name}                     
                     </li>
                )}
            </ul> : 'Loading'
            }
        </div>
    )
}

export default HomePage;
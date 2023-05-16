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
            flexWrap:'wrap',
            justifyContent:'center'
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
        },
        titre:{
            textAlign:'center'
        }
    }


    return(
        <div>  
            <h3 style={style.titre}>Vous êtes connecté !</h3>
            <h1 style={style.titre}>Liste des chats :  </h1> 
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
import { useEffect, useState } from "react";
import Movieslist from "./Movieslist";

const Favourite = () => {
    let [favour,setFavour]=useState(null);
    let [error, setError] = useState(null);
   

    useEffect(()=>{
       
       setFavour(JSON.parse(localStorage.getItem("favour")));

    },[])
   
    return ( 
        <div>
            {error !== null ? <h1>{error}</h1> :
               <div>
                {favour === null ? <div className="spin"></div> :
                    <Movieslist movies={favour} title="Favourite Movie"></Movieslist>
                }
               </div>
            }
           
        </div>
     );
}
 
export default Favourite;
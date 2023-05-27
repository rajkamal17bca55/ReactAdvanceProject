import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Movieslist from "./Movieslist";

const Search = () => {
     let { searchdata } = useParams();
     searchdata = searchdata.toLowerCase();



     let [movies, setMovies] = useState(null);
     let [error, setError] = useState(null);
     let [check,setCheck]=useState(true);
    

     useEffect(() => {
          setMovies(null);
          setTimeout(() => {
               fetch("http://localhost:3030/movies")
                    .then((res) => { return res.json() })
                    .then((data) => {

                         setMovies(data)
                         if("[]"==JSON.stringify(data.filter((fill)=>{return JSON.stringify(fill).toLowerCase().includes(searchdata)})))
                         {
                             setCheck(false);
                            
                         }else
                         {
                              setCheck(true);
                              
                         }
                        
                    })
                    .catch((er) => { setError("404 error occured") })
          }, 3000)
     }, [searchdata])


     return (
          <div>
               {error !== null ? <h1>{error}</h1> :
                    <div>
                         {movies === null ? <div className="spin"></div> :
                              <div>
                                   {check==true ?
                                      
                                         <Movieslist movies={movies.filter((v) => {
                                        return JSON.stringify(v).toLowerCase().includes(searchdata)
                                         })} title="Searched Result" ></Movieslist>:
                                         <h1>Search result not found</h1>
                                      
                                  }
                              </div>
                         }
                    </div>
               }

          </div>
     );
}

export default Search;

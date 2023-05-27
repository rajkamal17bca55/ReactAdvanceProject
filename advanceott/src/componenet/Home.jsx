import { useEffect, useState } from "react";

import Movieslist from "./Movieslist";


const Home = () => {

    let [movies, setMovies] = useState(null);
    let [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:3030/movies")
                .then((res) => { return res.json() })
                .then((data) => {

                    setMovies(data)
                })
                .catch((er) => { setError("404 error occured") })
        }, 3000)
    }, [])
    return (
        <div className="home">

            {error !== null ? <h1>{error}</h1> :
                <div>
                    {movies === null ?<div className="spin"></div> :
                        <div id="homespace">
                            <Movieslist movies={movies} title="All Movies"></Movieslist>
                            <Movieslist movies={movies.filter((v) => { return v.genre.includes("action") })} title="Action Movie" ></Movieslist>
                            <Movieslist movies={movies.filter((v) => { return v.rating >= 9 })} title="Hight Rated Movie" ></Movieslist>
                        </div>
                    }
                </div>
            }
        </div>

    );
}

export default Home;

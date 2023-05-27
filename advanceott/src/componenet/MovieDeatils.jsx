import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Movieslist from "./Movieslist";
import { useNavigate } from "react-router-dom";


const MovieDetails = () => {

    let { id } = useParams();
    let navs = useNavigate();

    let [movies, setMovies] = useState(null);
    let [error, setError] = useState(null);
    let [error1, setError1] = useState(null);
    let [relevent, setrelevent] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:3030/movies/${id}`)
                .then((res) => { return res.json() })
                .then((data) => {
                    setMovies(data);

                })
                .catch((er) => { setError("404 error occured") })
        }, 3000)
    }, [id])


    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:3030/movies")
                .then((res) => { return res.json() })
                .then((data) => {



                    setrelevent(data);
                    console.log(data);


                })
                .catch((er) => { setError1("404 error occured") })
        }, 3000)
    }, [id])


    function deleted() {


        fetch("http://localhost:3030/movies/" + id,
            {
                method: "Delete",
            })
            .then(() => {
                let del = prompt("if you want to delete type yes");
                if (del == 'yes') {
                    alert("deleted");

                    navs("/")

                }
            })

    }


    return (
        <div>
            {error !== null ? <h1>{error}</h1> :
                <div>
                    {movies === null ? <div className="spin"></div> :
                        <div>
                            {


                                <div id="totalmovieframe">
                                    <div className='movieframe' >
                                        <h1>{movies.moviename}</h1>
                                        <hr />
                                        <img src={movies.poster} height='250px' width='250px' />
                                        <hr />
                                        <div id='moviehint'>
                                            <label>Hero   :   </label>
                                            <label>{movies.hero}</label>
                                            <br />
                                            <label>heroine   :   </label>
                                            <label>{movies.heroine}</label>
                                            <br />
                                            <label>director   :   </label>
                                            <label>{movies.director}</label>
                                            <br />
                                            <label>release   :   </label>
                                            <label>{movies.release}</label>
                                            <br />
                                            <label>rating   :   </label>
                                            <label>{movies.rating}</label>
                                            <br />
                                            <label>Language   :</label>
                                            <p id="lang">{movies.languages.join((" , "))}</p>

                                        </div>
                                        <button onClick={deleted}>Delete Movie</button><br /><br />
                                       <Link to={"/updatemovie/"+movies.id} ><button >Update Movie</button></Link>
                                        <hr />

                                        <h3>Story Line</h3>
                                        <p>{movies.synopsis}</p>
                                    </div>
                                    <div className='movieframe'>
                                        <iframe width="560" height="315" src={movies.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                    <div>

                                        {error1 !== null ? <h1>{error1}</h1> :
                                            <div>
                                                {relevent === null ? <div className="spin"></div> :
                                                    <div>
                                                        {



                                                            <div id='relatedMovie' >

                                                                <Movieslist movies={relevent.filter((v) => {
                                                                    if (movies.genre.includes(" ")) {
                                                                        return movies.genre.split(" ").some((g) => { return v.genre.includes(g) })
                                                                    } else {
                                                                        return v.genre.includes(movies.genre)

                                                                    }
                                                                })} title="Related Movies"  ></Movieslist>
                                                            </div>
                                                        }
                                                    </div>
                                                }

                                            </div>
                                        }
                                    </div>

                                </div>
                            }
                        </div>
                    }
                </div>
            }
        </div>
    );
}

export default MovieDetails;
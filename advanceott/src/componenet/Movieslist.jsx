import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movieslist = ({ movies, title }) => {

    let [heart, setHeart] = useState(null);
    let [alter,setAlter]=useState(0);

    function favourite(movie) {
        if (localStorage.getItem("favour") === null) {
            localStorage.setItem("favour", "[]");
        }
        let favour = localStorage.getItem("favour");
        favour = JSON.parse(favour);
        let ans = false;
        for (let i = 0; i < favour.length; i++) {
            if (favour[i].id == movie.id) {
                ans = true;


            }
        }
        if (ans == true) {

            favour = favour.filter((m) => { return m.id != movie.id })
            favour = JSON.stringify(favour);
            localStorage.setItem("favour", favour);
            setAlter(alter+1);
           
        } else {
            favour.push(movie);
            favour = JSON.stringify(favour);
            localStorage.setItem("favour", favour);
            setAlter(alter-1);

           
        }

    }

    useEffect(() => {
        let h = JSON.parse(localStorage.getItem("favour"));
        h = h.map((v) => { return v.id })
        setHeart(h);

    }, [alter])
    return (
        <div>
            <h1 id='title'>{title}</h1>


            <div className="movies">
                {movies.map((movie, i) => {
                    return (
                        <div id="moviefixpage">
                            {
                                heart &&
                                <div>
                                    {heart.includes(movie.id) ? <button  onClick={() => { favourite(movie) }}   className="filledheart">🧡 </button> :
                                        <button id="emptyheart" onClick={() => { favourite(movie) }}> 🖤  </button>}
                                </div>
                            }
                            <Link to={`/moviedetails/${movie.id}`} id='moviestyle'>
                                <div key={i + 'a'} className="movie">
                                    <h5 >{movie.moviename}</h5>
                                    <img src={movie.poster} alt="no img" height="200px" width="200px" />
                                    <p>{movie.genre}</p>
                                </div>
                            </Link>
                        </div>
                    )
                })}



            </div>

        </div>
    );
}

export default Movieslist;
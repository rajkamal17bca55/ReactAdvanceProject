import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateMovie = () => {

    let { id } = useParams();

    

    let moviename = useRef();
    let hero = useRef();
    let heroine = useRef();
    let director = useRef();
    let genre = useRef();
    let poster = useRef();
    let trailer = useRef();
    let release = useRef();
    let rating = useRef();
    let synopsis = useRef();

    let navs = useNavigate();


    function Update(Event) {

        Event.preventDefault();
        let lang = document.getElementsByName("Language");

        let languages = [];

        for (let i = 0; i < lang.length; i++) {
            if (lang[i].checked === true) {
                languages.push(lang[i].value);
            }

        }


        let Updatemov = {

            moviename: moviename.current.value,
            hero: hero.current.value,
            heroine: heroine.current.value,
            director: director.current.value,
            genre: genre.current.value.toLowerCase(),
            poster: poster.current.value,
            trailer: trailer.current.value,
            release: release.current.value,
            rating: rating.current.value,
            synopsis: synopsis.current.value,
            languages: languages

        }




        fetch(`http://localhost:3030/movies/${id}`,
            {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(Updatemov)

            })
            .then((res) => {
                alert("movie  Updated");
                navs("/moviedetails/" + id)

            })
            .catch((data) => {
                alert("movie not Updated")
            })







    }



    useEffect(() => {
       
            fetch(`http://localhost:3030/movies/${id}`)
                .then((res) => { return res.json() })
                .then((data) => {
                    moviename.current.value = data.moviename;
                   hero.current.value=data. hero;
                     heroine.current.value=data.heroine;
                    director.current.value=data.director;
                     genre.current.value=data.genre;
                    poster.current.value=data.poster;
                    trailer.current.value=data.trailer;
                    release.current.value=data.release;
                    rating.current.value=data.rating;
                   synopsis.current.value=data.synopsis;
                    

                })

        
    }, [])







    return (
        <div id='addmoviepage'>
            
                <h1 >Update Movies</h1>
                <hr />
                <hr />
                <form onSubmit={Update} >
                    <input type="text" placeholder="Enter Movie Name" ref={moviename}  required />
                    <input type="text" placeholder="Enter Hero Name" ref={hero}  required />
                    <input type="text" placeholder="Enter Heroini Name" ref={heroine}  required />
                    <input type="text" placeholder="Enter Director Name" ref={director}  required />
                    <fieldset >
                        <legend>Language</legend>

                        <input type="checkbox" name="Language" value="Tamil" id='t' /><label htmlFor="t">Tamil</label>
                        <input type="checkbox" name="Language" value="English" id='e' /><label htmlFor="e">English</label>
                        <input type="checkbox" name="Language" value="Kannada" id='k' /><label htmlFor="k">Kannada</label>
                        <input type="checkbox" name="Language" value="Malayalam" id='m' /><label htmlFor="m">Malayalam</label>


                    </fieldset>
                    <input type="text" placeholder="Enter Genre" ref={genre}  required />
                    <input type="url" placeholder="Enter Movie poster" ref={poster}  required />
                    <input type="url" placeholder="Enter Movie Trailer" ref={trailer}  required />
                    <input type="number" placeholder="Enter year of release" min='1900' max='2030' ref={release}  required />
                    <input type="number" placeholder="Enter  movie rating" step='0.1' min='0' max='10' ref={rating}  required />
                    <textarea name="synopsis" cols="36" rows="5" ref={synopsis}  required></textarea>

                    <input type="submit" id="submit" value="Update" ></input>

                </form>
            
        </div>
    );
}

export default UpdateMovie;
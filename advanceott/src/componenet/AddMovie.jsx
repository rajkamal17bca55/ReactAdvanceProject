import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {

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

  let navs=  useNavigate();


    function AddMovie1(Event) {

        Event.preventDefault();
        let lang = document.getElementsByName("Language");

        let languages = [];

        for (let i = 0; i < lang.length; i++) {
            if (lang[i].checked === true) {
                languages.push(lang[i].value);
            }

        }

       
        let newMovie = {

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




        fetch("http://localhost:3030/movies",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newMovie)

            })
            .then((res) => {
                alert("movie  added");
                navs("/")

            })
            .catch((data) => {
                alert("movie not added")
            })







    }


    return (
        <div id='addmoviepage'>
            <h1 >Add new Movies</h1>
            <hr />
            <hr />
            <form onSubmit={AddMovie1} >
                <h1>hii kamal</h1>
                <input type="text" placeholder="Enter Movie Name" ref={moviename} required />
                <input type="text" placeholder="Enter Hero Name" ref={hero} required />
                <input type="text" placeholder="Enter Heroini Name" ref={heroine} required />
                <input type="text" placeholder="Enter Director Name" ref={director} required />
                <fieldset >
                    <legend>Language</legend>

                    <input type="checkbox" name="Language" value="Tamil" id='t' /><label htmlFor="t">Tamil</label>
                    <input type="checkbox" name="Language" value="English" id='e' /><label htmlFor="e">English</label>
                    <input type="checkbox" name="Language" value="Kannada" id='k' /><label htmlFor="k">Kannada</label>
                    <input type="checkbox" name="Language" value="Malayalam" id='m' /><label htmlFor="m">Malayalam</label>


                </fieldset>
                <input type="text" placeholder="Enter Genre" ref={genre} required />
                <input type="url" placeholder="Enter Movie poster" ref={poster} required />
                <input type="url" placeholder="Enter Movie poster" ref={trailer} required />
                <input type="number" placeholder="Enter year of release" min='1900' max='2030' ref={release} required />
                <input type="number" placeholder="Enter  movie rating" step='0.1' min='0' max='10' ref={rating} required />
                <textarea name="synopsis" cols="36" rows="5" ref={synopsis} required></textarea>

                <input type="submit" id="submit" value="Add"></input>

            </form>
        </div>
    );
}

export default AddMovie;
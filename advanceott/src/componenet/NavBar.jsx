import { useRef, useState } from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {

    let [searchh, setsearch] = useState("");
    let [menu, setMenu] = useState(false);





    return (
        <div className="navbar" >
            <div id="logo">
                <Link to="/" id='l1'><h1>Moview 🕷 </h1></Link>
            </div>

            <div id="searchbar">
                <input type="search" placeholder="Search Movie Here" value={searchh} onChange={(e) => { setsearch(e.target.value) }} />
                <Link to={`/searchedmovie/${searchh}`}  ><button>search</button></Link>
            </div>

            <div id="favor">
                <Link to="/fav">Favourite</Link>
            </div>

            <div id="addmovie">
                <button><Link to="/addmovie">Add Movie</Link></button>

            </div>

            <div className="hamperger">
                {menu ? <span onClick={()=>{setMenu(!menu)}}><i class='bx bx-menu-alt-right' ></i></span> : <span onClick={()=>{setMenu(!menu)}}><i class='bx bx-menu'></i></span> }
                {menu && <div className="menu">
                    <div id="menu-favor">
                        <Link to="/fav">Favourite</Link>
                    </div>

                    <div id="menu-addmovie">
                        <Link to="/addmovie">Add Movie</Link>

                    </div>
                </div>
                }
            </div>

        </div>
    );
}

export default NavBar;
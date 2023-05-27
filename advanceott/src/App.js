import logo from './logo.svg';
import './App.css';
import Home from './componenet/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './componenet/NavBar';
import AddMovie from './componenet/AddMovie';
import MovieDetails from './componenet/MovieDeatils';
import Search from './componenet/Search';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import Favourite from './componenet/Favourite';
import UpdateMovie from './componenet/UpdateMovie';
function App() {

  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  }


  return (
    <BrowserRouter>
      <Wrapper>

        <div className="App">
          <NavBar></NavBar>
          <Routes>
            <Route path='/' element={<Home></Home>} ></Route>
            <Route path='/addmovie' element={<AddMovie></AddMovie>}></Route>
            <Route path='/moviedetails/:id' element={<MovieDetails></MovieDetails>}></Route>
            <Route path="/searchedmovie/:searchdata" element={<Search></Search>}></Route>
            <Route path='/fav' element={<Favourite></Favourite>}></Route>
            <Route path='/updatemovie/:id' element={<UpdateMovie></UpdateMovie>}></Route>
          </Routes>
        </div>
      </Wrapper>

    </BrowserRouter>
  );
}

export default App;

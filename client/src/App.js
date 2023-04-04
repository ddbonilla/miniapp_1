import { Routes, Route } from 'react-router-dom';
import React,{ useState } from "react";
import Home from './Common/Home';
import AddMovies from './Common/AddMovies';
import NotFound from './Common/NotFound';
import "./App.css";
import NavBar from './Common/Navbar';

export const movieContext = React.createContext();

function App() {
  const [movies, setMovies] = useState();
  const url = "http://localhost:3001/" 

  return (
    <div className='app-wrapper'>
      <movieContext.Provider value={{ movies, setMovies, url }}>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          {/* <Route path='./Movies/:id' element={<AddMovies/>}/> */}
          <Route path='/*' element={<NotFound />}/>
        </Routes>
      </movieContext.Provider>
    </div>
  );
}

export default App;

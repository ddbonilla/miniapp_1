import { useContext, useEffect } from "react";
import { movieContext } from "../App";
import { useState } from "react";

const NavBar = () => {
  const { setMovies, url } = useContext(movieContext);
  const [ input, setInput ] = useState('');

  useEffect(() => {
    fetch(`${url}movies/${input}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, [input]);

  return (
    <>
      <div className="navbar-wrapper">
        <form className="nav-form">
          <input 
              type="text" 
              className="search-bar" 
              placeholder="Search..." 
              onChange={ (e) => setInput(e.target.value)}
          />
        </form>
      </div>
    </>
  );
};

export default NavBar;

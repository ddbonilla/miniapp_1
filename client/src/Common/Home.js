import { useEffect, useContext } from "react";
import { movieContext } from "../App";
import AddMovies from "./AddMovies";
import DeleteMovies from "./DeleteMovies";
import "./common.css";

const Home = () => {
  const { movies, setMovies, url } = useContext(movieContext);

  useEffect(() => {
    fetch(url + "movies")
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setMovies(data);
      });
  }, []);

  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies ? (
          movies.map((movie, i) => {
            return (
              <div className="movie-list">
                <DeleteMovies id={movie.id}/>
                <li key={i}>{movie.title}</li> 
              </div>
            )
          })
        ) : (
          <pre>loading...</pre>
        )}
      </ul>
      <div>
        <AddMovies />
      </div>
    </div>
  );
};

export default Home;

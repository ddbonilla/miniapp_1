import { useEffect, useContext } from "react";
import { movieContext } from "../App";
import "./common.css";
import AddMovies from "./AddMovies";

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
            return <li key={i}>{movie.title}</li>;
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

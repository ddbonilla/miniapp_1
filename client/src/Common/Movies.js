import { useContext, useEffect } from "react";
import { movieContext } from "../App";

const Movies = () => {
  const { movies, setMovies, url } = useContext(movieContext);
  const searchTerms = []

  useEffect(() => {
    fetch(`url/${searchTerms}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setMovies(data);
      });
  }, []);
  
  return (
    <>

    </>
  );
}
 
export default Movies;
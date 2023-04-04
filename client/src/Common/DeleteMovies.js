import { useContext } from "react";
import { movieContext } from "../App";

const DeleteMovies = ({id}) => {
    const { url } = useContext(movieContext);

    const handleClick = () =>  {
        fetch(`${url}movies/${id}`, {
            method: 'DELETE'
        })
        .then(() => console.log('Movie Deleted'))
    }

    return (
        <>
            <button 
                className="del-btn"
                onClick={handleClick}
            >
            -
            </button>
        </>
    );
}
 
export default DeleteMovies;
import { useContext, useState } from "react";
import { movieContext } from "../App";

const AddMovies = () => {
  const { url } = useContext(movieContext);

  const [ title, setTitle ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const entry = {title};

    fetch(`${url}movies`, {
      method: 'POST',
      headers: {"Content-type" : "application/json"},
      body: JSON.stringify(entry)

    }).then(() => {
      console.log('new movie added');
    })

  } 

  return (
    <div className="add-wrapper">
      <form 
        className="add-form"
        onSubmit={handleSubmit}
      >
        <input 
          type="text"
          placeholder="Movie Name..."
          onChange={ (e) => setTitle(e.target.value)}
          value = {title}
        />
        <button>Add</button>
      </form>
    </div>
  );
}
 
export default AddMovies;

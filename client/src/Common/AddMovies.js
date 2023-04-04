import { useContext, useState } from "react";
import { movieContext } from "../App";

const AddMovies = () => {
  const { url } = useContext(movieContext);

  const [title, setTitle] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title !== "") {
      handlePosting();
    } else {
      alert("Please add a movie title");
    }
  };

  const handlePosting = () => {
    const entry = { title };
    setIsPending(true);

    fetch(`${url}movies`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(entry),
    }).then(() => {
      console.log("new movie added");
      setIsPending(false);
    });
  };

  return (
    <div className="add-wrapper">
      <form className="add-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Movie Name..."
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        {!isPending && <button>Add Movie</button>}
        {isPending && <button disabled>Adding Movie...</button>}
      </form>
    </div>
  );
};

export default AddMovies;

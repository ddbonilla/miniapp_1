import './App.css';

function App() {

  const movies = [
    {title: "Mean Girls"},
    {title: "Hackers"},
    {title: "The Grey"},
    {title: "Sunshine"},
    {title: "Ex Machina"},
  ]

  return (
    <div className="App">
      <ul>
        {movies.map((movie, i)=> 
          <li key={i}>{movie.title}</li>
        )}
      </ul>

    </div>
  );
}

export default App;

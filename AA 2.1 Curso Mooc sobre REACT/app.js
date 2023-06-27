const { useState } = React;

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="container">
      <h1 className="heading">Plicacion de React.js de contadora</h1>
      <p>Contador: {counter}</p>
      <button className="button" onClick={incrementCounter}>Incremetar</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
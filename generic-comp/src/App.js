import logo from "./logo.svg";
import "./App.css";
import { Pin } from "./components/Pin";

function App() {
  return (
    <div className="App">
      <h1>Generic Component</h1>
      <Pin length={5} maxChar={1} />
    </div>
  );
}

export default App;

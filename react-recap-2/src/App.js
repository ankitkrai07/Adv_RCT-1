import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./Component/Counter";
import { Counter2 } from "./Component/Counter2";

function App() {
  return (
    <div className="App">
      <Counter />
      <Counter2 />
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { Timer1 } from "./Components/Timer1";
import { Counter } from "./Components/Counter";
import { Counter2 } from "./Components/Counter2";
import { Form } from "./Components/Form";

function App() {
  return (
    <div className="App">
      <h1>Custom Hook</h1>
      <Timer1 />
      <Counter />
      <Counter2 />
      <Form />
    </div>
  );
}

export default App;

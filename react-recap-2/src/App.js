// import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./Component/Counter";
import { Counter2 } from "./Component/Counter2";
import { Form } from "./Component/Form";
import { Counter3 } from "./Component/Counter3";
import { FormRef } from "./Component/FormRef";

function App() {
  return (
    <div className="App">
      <Counter />
      <Counter2 />
      <Form />
      <Counter3 />
      <FormRef />
    </div>
  );
}

export default App;

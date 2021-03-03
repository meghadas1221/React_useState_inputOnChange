import "./styles.css";
import { useState } from "react";

export default function App() {
  var [userInput, setUserInput] = useState("");

  function inputChangeHandler(event) {
    setUserInput(event.target.value);
  }

  return (
    <div className="App">
      <h1>Inside Out</h1>
      <input onChange={inputChangeHandler}></input>
      <div>Welcome {userInput}</div>
    </div>
  );
}

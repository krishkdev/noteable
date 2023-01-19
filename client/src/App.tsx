import { useState } from "react";
import "./App.css";
import Navbar from "./components/NavBar/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;

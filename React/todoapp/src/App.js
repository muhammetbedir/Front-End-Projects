import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos") != null)
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
  const [filtered, setFiltered] = useState("all");
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="App">
      <h1 className="todoHeader">todos</h1>
      <div className="container">
        <Form todos={todos} setTodos={setTodos} />
        <Todos todos={todos} setTodos={setTodos} filtered={filtered} />
        <Footer
          todos={todos}
          filtered={filtered}
          setFiltered={setFiltered}
          setTodos={setTodos}
        />
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";

function Form({ todos, setTodos }) {
  const [status, setStatus] = useState(false);
  const [inputText, setInputText] = useState("");
  const changeInput = (e) => {
    e.preventDefault();
    if (inputText !== "") {
      setTodos([
        ...todos,
        { text: inputText, checked: false, id: Math.random() * 1000 },
      ]);
      setInputText("");
    }
  };
  const CheckedAll = () => {
    setStatus(!status);
    setTodos(
      todos.map((item) => {
        return { ...item, checked: status };
      })
    );
  };
  return (
    <div className="formCompanent">
      <button onClick={CheckedAll}></button>
      <form onSubmit={changeInput}>
        <input
          value={inputText}
          placeholder="What needs to be done? "
          className="todoInput"
          onChange={(e) => setInputText(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Form;

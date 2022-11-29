import React from "react";

function Todos({ todos, setTodos, filtered }) {
  const changeCheck = (e) => {
    setTodos(
      todos.map((item) => {
        return item.id === Number(e.target.parentNode.parentNode.id)
          ? { ...item, checked: !item.checked }
          : item;
      })
    );
  };
  const deleteTodo = (e) => {
    setTodos(
      todos.filter((item) => {
        return item.id !== Number(e.target.parentNode.id);
      })
    );
  };
  const boolFilter = filtered === "true" ? true : false;
  return (
    <div>
      <ul className="listItems">
        {todos.map((item) =>
          item.checked === boolFilter || filtered === "all" ? (
            <li
              key={item.id}
              id={item.id}
              className={item.checked ? "completed" : ""}
            >
              <div>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={changeCheck}
                  className="checkBoxToggle"
                />
                {item.text}
              </div>
              <button className="destroy" onClick={deleteTodo}>
                x
              </button>
            </li>
          ) : (
            ""
          )
        )}
      </ul>
    </div>
  );
}

export default Todos;

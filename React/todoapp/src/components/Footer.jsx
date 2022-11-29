import { useState } from "react";

function Footer({ todos, filtered, setFiltered, setTodos }) {
  const [isActive, setIsActive] = useState("all");
  const unChecked = todos.filter((item) => item.checked === false);
  const checkedTodos = todos.filter((item) => item.checked === true);
  const filterTodo = (e) => {
    setFiltered(e.target.id);
    setIsActive(e.target.id);
  };
  const unCheckedAll = (e) => {
    setTodos(
      todos.map((item) => {
        return { ...item, checked: false };
      })
    );
  };
  return (
    <footer>
      <span>
        <strong>{unChecked.length} items left</strong>
      </span>
      <ul className="allFilters">
        <li
          id="all"
          className={isActive === "all" ? "activeLi" : ""}
          onClick={filterTodo}
        >
          All
        </li>
        <li
          id="false"
          className={isActive === "false" ? "activeLi" : ""}
          onClick={filterTodo}
        >
          Active
        </li>
        <li
          id="true"
          className={isActive === "true" ? "activeLi" : ""}
          onClick={filterTodo}
        >
          Completed
        </li>
      </ul>
      <button
        className={checkedTodos.length === 0 ? "hidden" : "clearCompleted"}
        onClick={unCheckedAll}
      >
        Clear Completed
      </button>
    </footer>
  );
}

export default Footer;

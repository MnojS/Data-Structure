import React, { useEffect, useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [todoTask, setTodoTask] = useState([]);

  const [input, setInput] = useState("");

  const addTodoHandler = (e) => {
    e.preventDefault();
    const currentDate = new Date();
    const seconds = currentDate.getSeconds();
    setTodoTask([...todoTask, { todo: input, _id:`${seconds}` }]);
    setInput("");
  };
  const deleteHandler = (item) => {
    const filteredData = todoTask.filter((i) => i._id !== item);
    setTodoTask([...filteredData]);
  };

  return (
    <div className="todo-container">
      <form className="todo-form" onSubmit={addTodoHandler}>
        <input
          placeholder="Add your todo task here..."
          className="todo-input"
          value={input} 
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="todo-button" type="submit">
          Add
        </button>
      </form>
      <ul className="todo-ul">
        {todoTask.map((item) => (
          <li key={item._id} className="todo-li">
            <span>{item.todo}</span>
            <button onClick={() => deleteHandler(item._id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;



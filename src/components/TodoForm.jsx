import React, { useState } from "react";

function TodoForm({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  const onchangeHandler = (event) => {
    const changeTodo = event.target.value;
    setTodo(changeTodo);
  };

  const addButtonHandler = () => {
    const newTodo = {
      id: todos.length + 1,
      text: todo,
    };
    setTodos([...todos, newTodo]);
    setTodo("")
  };

  return (
    <nav>
      <input
        type="text"
        value={todo}
        onChange={onchangeHandler}
        placeholder="할 일을 입력하세요"
      />
      <button onClick={addButtonHandler}>추가하기</button>
    </nav>
  );
}

export default TodoForm;

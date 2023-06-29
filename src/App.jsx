import { useState } from "react";
import "./App.css";

import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "자바스크립트 공부하기" },
  ]);

  return (
    <div>
      <TodoForm todos={todos} setTodos={setTodos} />
      <h1>Todo List</h1>
      <main>
        {todos.map((todo) => {
          return <Todo todo={todo} key={todo.id} />;
        })}
      </main>
    </div>
  );
}

export default App;

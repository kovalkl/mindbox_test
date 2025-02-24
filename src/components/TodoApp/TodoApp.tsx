import { useState } from "react";

import Paper from "@mui/material/Paper";

import { TodoInput } from "@/components/TodoApp/components/TodoInput/TodoInput";
import { TodoList } from "@/components/TodoApp/components/TodoList/TodoList";

import { TodoType } from "@/components/TodoApp/types";

export const TodoApp = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const addTodo = (newTodo: string) => {
    setTodos((todos) => [...todos, { text: newTodo, isCompleted: false }]);
  };

  return (
    <Paper className="todo-app">
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} />
      {/* <TodoControls /> */}
    </Paper>
  );
};

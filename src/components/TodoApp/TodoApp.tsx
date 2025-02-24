import { Stack } from "@mui/material";

import { TodoInput } from "@/components/TodoApp/components/TodoInput/TodoInput";
import { useState } from "react";

export const TodoApp = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (newTodo: string) => {
    setTodos((todos) => [...todos, newTodo]);
  };

  return (
    <Stack className="todo-app">
      <TodoInput addTodo={addTodo} />
      {/* <TodoList /> */}
      {/* <TodoControls /> */}
    </Stack>
  );
};

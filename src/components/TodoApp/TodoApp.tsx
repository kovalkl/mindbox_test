import { useState } from "react";

import { Stack } from "@mui/material";

import { TodoInput } from "@/components/TodoApp/components/TodoInput/TodoInput";

type TodoType = {
  text: string;
  isCompleted: boolean;
};

export const TodoApp = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const addTodo = (newTodo: string) => {
    setTodos((todos) => [...todos, { text: newTodo, isCompleted: false }]);
  };

  return (
    <Stack className="todo-app">
      <TodoInput addTodo={addTodo} />
      {/* <TodoList /> */}
      {/* <TodoControls /> */}
    </Stack>
  );
};

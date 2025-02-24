import { useState } from "react";

import Paper from "@mui/material/Paper";

import { TodoInput } from "@/components/TodoApp/components/TodoInput/TodoInput";
import { TodoList } from "@/components/TodoApp/components/TodoList/TodoList";
import { TodoControls } from "@/components/TodoApp/components/TodoControls/TodoControls";

import { getIncompleteTodosCount } from "@/components/TodoApp/components/getIncompleteTodosCount";

import { TodoType } from "@/components/TodoApp/types";

export const TodoApp = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const addTodo = (newTodo: string) => {
    setTodos((todos) => [
      ...todos,
      { text: newTodo, isCompleted: false, id: Date.now().toString() },
    ]);
  };

  const toggleCompleted = (id: string) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos((todos) => todos.filter((todo) => !todo.isCompleted));
  };

  return (
    <Paper className="todo-app">
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} toggleCompleted={toggleCompleted} />
      <TodoControls
        todoCount={getIncompleteTodosCount(todos)}
        clearCompleted={clearCompleted}
      />
    </Paper>
  );
};

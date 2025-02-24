import { TodoType } from "@/components/TodoApp/types";

export const getIncompleteTodosCount = (todos: TodoType[]): number => {
  return todos.filter((todo) => !todo.isCompleted).length;
};

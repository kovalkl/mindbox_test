import { Typography } from "@mui/material";

import { TodoType } from "@/components/TodoApp/types";

type TodoProps = {
  todos: TodoType[];
};

export const TodoList = ({ todos }: TodoProps) => {
  return todos.length === 0 ? (
    <Typography variant="body2">No todos...</Typography>
  ) : (
    <Typography>List</Typography>
  );
};

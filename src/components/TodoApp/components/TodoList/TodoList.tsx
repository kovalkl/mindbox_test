import Typography from "@mui/material/Typography";
import List from "@mui/material/List";

import { TodoType } from "@/components/TodoApp/types";

import { TodoItem } from "@/components/TodoApp/components/TodoItem/TodoItem";

type TodoProps = {
  todos: TodoType[];
  // eslint-disable-next-line no-unused-vars
  toggleCompleted: (id: string) => void;
};

export const TodoList = ({ todos, toggleCompleted }: TodoProps) => {
  return todos.length === 0 ? (
    <Typography variant="body2">No todos...</Typography>
  ) : (
    <List>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleCompleted={toggleCompleted} />
      ))}
    </List>
  );
};

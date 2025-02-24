import ListItem from "@mui/material/ListItem";

import { TodoType } from "@/components/TodoApp/types";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

type TodoItemType = {
  todo: TodoType;
  // eslint-disable-next-line no-unused-vars
  toggleCompleted: (id: string) => void;
};

export const TodoItem = ({ todo, toggleCompleted }: TodoItemType) => {
  return (
    <ListItem className="todo-item">
      <FormControlLabel
        sx={{ wordBreak: "break-word", whiteSpace: "normal" }}
        className={todo.isCompleted ? "todo-completed" : ""}
        control={
          <Checkbox
            icon={<RadioButtonUncheckedIcon />}
            checkedIcon={<TaskAltIcon color="success" />}
            checked={todo.isCompleted}
            onChange={() => toggleCompleted(todo.id)}
          />
        }
        label={todo.text}
      />
    </ListItem>
  );
};

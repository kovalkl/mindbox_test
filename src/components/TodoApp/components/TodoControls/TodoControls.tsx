import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { getCounterText } from "@/components/TodoApp/components/TodoControls/getCounterText";
import Button from "@mui/material/Button";

type TodoControlsProps = {
  todoCount: number;
  clearCompleted: () => void;
};

export const TodoControls = ({
  todoCount,
  clearCompleted,
}: TodoControlsProps) => {
  const counterText = getCounterText(todoCount);

  return (
    <Stack className="todo-controls">
      <Typography>{counterText}</Typography>
      <Button onClick={clearCompleted}>Clear completed</Button>
    </Stack>
  );
};

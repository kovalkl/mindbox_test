import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { getCounterText } from "@/components/TodoApp/components/TodoControls/getCounterText";

type TodoControlsProps = {
  todoCount: number;
};

export const TodoControls = ({ todoCount }: TodoControlsProps) => {
  const counterText = getCounterText(todoCount);

  return (
    <Stack className="todo-controls">
      <Typography>{counterText}</Typography>
    </Stack>
  );
};

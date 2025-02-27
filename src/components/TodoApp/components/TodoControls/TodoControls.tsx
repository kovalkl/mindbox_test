import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { TodoFilter } from "@/components/TodoApp/components/TodoFilter/TodoFilter";

import { getCounterText } from "@/components/TodoApp/components/TodoControls/getCounterText";
import { FilterType } from "@/components/TodoApp/types";

type TodoControlsProps = {
  todoCount: number;
  clearCompleted: () => void;
  currentFilter: FilterType;
  // eslint-disable-next-line no-unused-vars
  setCurrentFilter: (filter: FilterType) => void;
};

export const TodoControls = ({
  todoCount,
  clearCompleted,
  currentFilter,
  setCurrentFilter,
}: TodoControlsProps) => {
  const counterText = getCounterText(todoCount);

  return (
    <Stack
      className="todo-controls"
      sx={{
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Typography sx={{ flexGrow: 1 }}>{counterText}</Typography>
      <TodoFilter
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
      />
      <Button onClick={clearCompleted}>Clear completed</Button>
    </Stack>
  );
};

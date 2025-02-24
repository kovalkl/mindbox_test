import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import { FilterType } from "@/components/TodoApp/types";

type TodoFilterProps = {
  currentFilter: FilterType;
  // eslint-disable-next-line no-unused-vars
  setCurrentFilter: (filter: FilterType) => void;
};

export const TodoFilter = ({
  currentFilter,
  setCurrentFilter,
}: TodoFilterProps) => {
  return (
    <FormControl>
      <RadioGroup
        row
        value={currentFilter}
        sx={{ gap: "1rem" }}
        onChange={(e) => setCurrentFilter(e.target.value as FilterType)}
      >
        <FormControlLabel
          className="todo-filter"
          value="all"
          control={<Radio sx={{ display: "none" }} />}
          label="All"
        />
        <FormControlLabel
          className="todo-filter"
          value="active"
          control={<Radio sx={{ display: "none" }} />}
          label="Active"
        />
        <FormControlLabel
          className="todo-filter"
          value="completed"
          control={<Radio sx={{ display: "none" }} />}
          label="Completed"
        />
      </RadioGroup>
    </FormControl>
  );
};

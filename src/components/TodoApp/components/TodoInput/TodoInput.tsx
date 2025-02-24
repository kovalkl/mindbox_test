import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const PLACEHOLDER_TEXT = "What needs to be done?";

type TodoInputProps = {
  // eslint-disable-next-line no-unused-vars
  addTodo: (todo: string) => void;
};

export const TodoInput = ({ addTodo }: TodoInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedValue = inputValue.trim();

    if (!trimmedValue) {
      return;
    }

    addTodo(inputValue);
    setInputValue("");
  };

  return (
    <Paper
      component="form"
      onSubmit={submitForm}
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="expand-more" disabled>
        <ExpandMoreIcon />
      </IconButton>
      <InputBase
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder={PLACEHOLDER_TEXT}
        inputProps={{ "aria-label": PLACEHOLDER_TEXT }}
        sx={{ ml: 1, flex: 1 }}
      />
    </Paper>
  );
};

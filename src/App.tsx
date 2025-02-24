import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { TodoApp } from "@/components/TodoApp/TodoApp";

function App() {
  return (
    <Box p={4}>
      <Typography variant="h1">Todos</Typography>
      <TodoApp />
    </Box>
  );
}

export default App;

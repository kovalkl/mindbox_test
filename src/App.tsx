import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { TodoApp } from "@/components/TodoApp/TodoApp";

function App() {
  return (
    <Container>
      <Typography variant="h1">Todos</Typography>
      <TodoApp />
    </Container>
  );
}

export default App;

import { createTheme } from "@mui/material/styles";

const COLORS = {
  PRIMARY: "#77C0AF",
  SECONDARY: "#EADBDA",
  LIGHT: "#F5F5F5",
  WHITE: "#FFFFFF",
  INFO: "#808080",
  DARK: "#4D4D4D",
};

export const theme = createTheme({
  typography: {
    h1: {
      fontSize: "4rem",
      color: COLORS.SECONDARY,
      textAlign: "center",
      marginBottom: "1rem",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: COLORS.LIGHT,
        },
      },
    },
    MuiStack: {
      styleOverrides: {
        root: {
          "&.todo-app": {
            backgroundColor: COLORS.WHITE,
            minWidth: "400px",
          },
        },
      },
    },
  },
});

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
  },
});

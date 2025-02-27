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
    body2: {
      color: COLORS.INFO,
      fontSize: "1.5rem",
      textAlign: "center",
      padding: "1rem",
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
          },
          "&.todo-controls": {
            padding: "1rem",
            minHeight: "50px",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "0.5rem",
            fontWeight: "bold",
            "& *": {
              fontSize: "0.85rem",
            },
          },
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        square: true,
      },
      styleOverrides: {
        root: {
          "&.todo-app": {
            backgroundColor: COLORS.WHITE,
            component: "main",
            "& > :not(:last-child)": {
              borderBottom: `1px solid ${COLORS.SECONDARY}`,
            },
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: "0.5rem 1rem",
          "&.todo-item:not(:last-child)": {
            borderBottom: `1px solid ${COLORS.SECONDARY}`,
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: "0",
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          "&.todo-completed": {
            textDecoration: "line-through",
            color: COLORS.INFO,
          },
          "& .MuiRadio-root.Mui-checked + span": {
            color: COLORS.PRIMARY,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: COLORS.DARK,
          textTransform: "none",
          padding: "0.5rem 1rem",
          "&:hover": {
            backgroundColor: COLORS.LIGHT,
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "1rem",
        },
      },
    },
  },
});

import { createTheme } from "@mui/material/styles";
const Theme = createTheme({
  palette: {
    primary: {
      main: "#87DCF5",
      card: "#273185",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "1rem",
          textTransform: "none",
        },
      },
    },
  },
});

export default Theme;

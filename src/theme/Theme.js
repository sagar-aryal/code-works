import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      // works
      main: "#008394",
      contrastText: "#fff",
    },
    secondary: {
      // works
      main: "#ffea00",
      contrastText: "#fff",
    },
  },
});

export default theme;

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
  typography: {
    h3: {
      fontFamily: "Raleway",
      fontSize: "2.5rem",
      fontWeight: 700,
      color: "#008394",
      lineHeight: 1.5,
    },
    h4: {
      fontFamily: "Parisienne",
      fontSize: "1.75rem",
      fontWeight: 700,
      color: "#008394",
    },
    h5: {
      fontFamily: "Raleway",
      fontSize: "1.5rem",
      fontWeight: 700,
      color: "#008394",
    },
    subtitle1: {
      fontSize: "1.1rem",
      fontWeight: 300,
      color: "#8e8e8e",
      lineHeight: 1.5,
    },
  },
});

export default theme;

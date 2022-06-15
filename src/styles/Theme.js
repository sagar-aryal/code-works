import { createTheme } from "@mui/material/styles";

const blueColor = "#64b5f6";
const orangeColor = "#ff8a65";

const theme = createTheme({
  palette: {
    common: {
      blue: `${blueColor}`,
      orange: `${orangeColor}`,
    },
    primary: {
      main: `${blueColor}`,
      light: "#757ce8",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      main: `${orangeColor}`,
      light: "#ff7961",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },

  typography: {
    h5: {
      fontWeight: 300,
    },
  },
});

export default theme;

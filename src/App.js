import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import RevolutionPage from "./pages/RevolutionPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import theme from "./styles/Theme";

import { ThemeProvider } from "@mui/material/styles";
import {
  useScrollTrigger,
  Fade,
  Box,
  CssBaseline,
  Toolbar,
  Container,
  Fab,
} from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 10, right: 10 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />

        <Header />

        <Container>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="revolution" element={<RevolutionPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Routes>
        </Container>

        <Toolbar id="back-to-top-anchor" />
        <ScrollTop>
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUp />
          </Fab>
        </ScrollTop>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

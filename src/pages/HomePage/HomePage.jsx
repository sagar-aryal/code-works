import React from "react";

import hero_banner from "../../assets/hero_banner.png";
import AboutPage from "../AboutPage/AboutPage";
import RevolutionPage from "../RevolutionPage/RevolutionPage";
import ServicesPage from "../ServicesPage/ServicesPage";
import ContactPage from "../ContactPage/ContactPage";

import { Button, CardMedia, Grid, Typography, Container } from "@mui/material";
import {
  buttonStyles,
  gridItemStyles,
  homeContainerStyles,
  imageItemStyles,
  mediaCardStyles,
} from "./HomePageStyles";

const HomePage = () => {
  return (
    <React.Fragment>
      <Container sx={homeContainerStyles}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            <Grid container>
              <Grid item sx={gridItemStyles}>
                <Typography variant="h3">
                  Bringing <br />
                  Technologies Together
                </Typography>
                <Grid item>
                  <Button sx={buttonStyles} variant="contained">
                    Learn More
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item sx={imageItemStyles}>
            <CardMedia
              component="img"
              src={hero_banner}
              alt="Hero Image"
              sx={mediaCardStyles}
            />
          </Grid>
        </Grid>
      </Container>
      <AboutPage />
      <RevolutionPage />
      <ServicesPage />
      <ContactPage />
    </React.Fragment>
  );
};

export default HomePage;

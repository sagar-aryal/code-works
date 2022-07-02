import React from "react";

import hero_banner from "../../assets/hero_banner.png";

import { Button, CardMedia, Grid, Typography, Container } from "@mui/material";
import {
  buttonStyles,
  gridItemStyles,
  homeContainerStyles,
  imageItemStyles,
  mediaCardStyles,
  typographyStyles,
} from "./HomePageStyles";

const HomePage = () => {
  return (
    <React.Fragment>
      <Container sx={homeContainerStyles}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            <Grid container>
              <Grid item sx={gridItemStyles}>
                <Typography sx={typographyStyles} variant="h4">
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
    </React.Fragment>
  );
};

export default HomePage;

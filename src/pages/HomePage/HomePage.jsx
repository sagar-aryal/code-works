import React from "react";

import heroImage from "../../assets/heroImage.png";

import { Button, CardMedia, Grid, Typography } from "@mui/material";
import {
  buttonStyles,
  imageItemStyles,
  mediaCardStyles,
  typographyStyles,
} from "./HomePageStyles";
import { Container } from "@mui/system";

const HomePage = () => {
  return (
    <React.Fragment>
      <Container>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            <Grid container>
              <Grid item>
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
              src={heroImage}
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

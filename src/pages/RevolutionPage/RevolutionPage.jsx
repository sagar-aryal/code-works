import React from "react";

import { revolutionContainerStyles } from "./RevolutionPageStyles";
import vision from "../../assets/vision.png";

import { Container, Grid, Typography } from "@mui/material";

const RevolutionPage = () => {
  return (
    <React.Fragment>
      <Container sx={revolutionContainerStyles}>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h3">The Revolution</Typography>
          </Grid>
          <Grid item container>
            <Grid item>
              <img
                src={vision}
                alt="vision"
                width="250px"
                height="250px"
                style={{ borderRadius: "50%" }}
              />
            </Grid>
            <Grid item container direction="column">
              <Typography variant="h5">Vision</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                The rise of computers and subsequently the internet has
                completely altered every aspect of human life.This has increased
                our comfort broadened our connections and reshaped how we view
                the world.
              </Typography>
              <Typography variant="body1" paragraph>
                What once was confined to huge rooms and teams of engineers now
                resides in every single one of our hands. Harnessing this
                unlimited potential by using it to solve problems and better
                lives is at the heart of everything we do.
              </Typography>
              <Typography variant="body1" paragraph>
                We want to help business capitalize on the latest and greatest
                technology. The best way to predict the future is to be the one
                building it and we want to help guide the world into this next
                chapter of technological expansion, exploration and innovation.
              </Typography>
              <Typography variant="body1" paragraph>
                We see future where every individual has personalized software
                custom tailored to their lifestyle, culture and interests
                helping them overcome life's obstacles. Each project is a step
                towards that goal.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default RevolutionPage;

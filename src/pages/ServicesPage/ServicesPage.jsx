import React from "react";

import software_development from "../../assets/software_development.png";

import { Button, Grid, Typography } from "@mui/material";
import {
  servicesSubtitleStyles,
  servicesTitleStyles,
  Span,
  buttonStyles,
} from "./ServicesPageStyles";

const ServicesPage = () => {
  return (
    <React.Fragment>
      <Grid container>
        <Grid item>
          <Typography sx={servicesTitleStyles} variant="h5">
            Software Development
          </Typography>
          <Typography sx={servicesSubtitleStyles} variant="subtitle2">
            Save Energy. Save Time. Save Money <br />
            Complete digital solutions, from investigation to{" "}
            <Span>celebration</Span>
          </Typography>
          <Button sx={buttonStyles} variant="outlined">
            Learn More
          </Button>
        </Grid>
        <Grid item>
          <img
            src={software_development}
            alt="software development"
            width="220px"
            height="220px"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ServicesPage;

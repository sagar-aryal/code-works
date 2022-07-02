import React from "react";

import website_development from "../../assets/website_development.png";
import theme from "../../theme/Theme";

import {
  Button,
  Grid,
  Typography,
  Container,
  useMediaQuery,
} from "@mui/material";
import {
  headingStyles,
  learnButtonStyles,
  serviceContainer,
  SpecialText,
  subtitleStyles,
} from "../ServicesPage/ServicesPageStyles";

const WebsitePage = () => {
  const matchSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <React.Fragment>
      <Container sx={serviceContainer}>
        <Grid container justifyContent={matchSM ? "center" : "flex-end"}>
          <Grid item>
            <Typography sx={headingStyles} variant="h5">
              Website Development
            </Typography>
            <Typography sx={subtitleStyles} variant="subtitle1">
              Reach More. Discover More. Sell More
            </Typography>
            <Typography variant="subtitle1">
              Optimize for Search Engines, built for speed.
            </Typography>
            <Button sx={learnButtonStyles} variant="contained">
              Learn More
            </Button>
          </Grid>
          <Grid item>
            <img
              src={website_development}
              alt="software development"
              width="220px"
              height="220px"
            />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default WebsitePage;

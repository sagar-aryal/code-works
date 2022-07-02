import React from "react";

import software_development from "../../assets/software_development.png";
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

const SoftwarePage = () => {
  const matchSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <React.Fragment>
      <Container sx={serviceContainer}>
        <Grid container justifyContent={matchSM ? "center" : "undefined"}>
          <Grid item>
            <Typography sx={headingStyles} variant="h5">
              Software Development
            </Typography>
            <Typography sx={subtitleStyles} variant="subtitle1">
              Save Energy. Save Time. Save Money
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{" "}
              <SpecialText>Celebration</SpecialText>
            </Typography>
            <Button sx={learnButtonStyles} variant="contained">
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
      </Container>
    </React.Fragment>
  );
};

export default SoftwarePage;

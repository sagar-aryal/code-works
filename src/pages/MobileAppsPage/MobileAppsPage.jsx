import React from "react";

import mobile_apps from "../../assets/mobile_apps.png";
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
  subtitleStyles,
} from "../ServicesPage/ServicesPageStyles";

const MobileAppsPage = () => {
  const matchSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <React.Fragment>
      <Container sx={serviceContainer}>
        <Grid container justifyContent={matchSM ? "center" : "undefined"}>
          <Grid item>
            <Typography sx={headingStyles} variant="h5">
              Mobile Development
            </Typography>
            <Typography sx={subtitleStyles} variant="subtitle1">
              Extend Functionality. Extend Access. Extend Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app{" "}
              {matchSM ? null : <br />} with either mobile platform.
            </Typography>
            <Button sx={learnButtonStyles} variant="contained">
              Learn More
            </Button>
          </Grid>
          <Grid item>
            <img
              src={mobile_apps}
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

export default MobileAppsPage;

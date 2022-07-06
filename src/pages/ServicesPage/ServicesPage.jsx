import React from "react";
import { Link } from "react-router-dom";

import software_development from "../../assets/software_development.png";
import website_development from "../../assets/website_development.png";
import mobile_apps from "../../assets/mobile_apps.png";
import theme from "../../theme/Theme";
import {
  learnButtonStyles,
  serviceContainer,
  SpecialText,
} from "./ServicesPageStyles";

import {
  Button,
  Grid,
  Typography,
  Container,
  useMediaQuery,
} from "@mui/material";

const ServicesPage = () => {
  const matchSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <React.Fragment>
      <Container>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h3" style={{ marginTop: "2rem" }}>
              Services
            </Typography>
          </Grid>
          <Grid item>
            {/*   Software Development Block */}
            <Grid
              container
              justifyContent={matchSM ? "center" : "flex-end"}
              sx={serviceContainer}
            >
              <Grid item>
                <Typography variant="h5">Software Development</Typography>
                <Typography variant="subtitle1">
                  Save Energy. Save Time. Save Money
                </Typography>
                <Typography variant="subtitle1">
                  Complete digital solutions, from investigation to{" "}
                  <SpecialText>Celebration</SpecialText>
                </Typography>
                <Button
                  sx={learnButtonStyles}
                  variant="contained"
                  component={Link}
                  to="/software"
                >
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
          </Grid>
          <Grid item>
            {/*   Website Development Block */}
            <Grid
              container
              justifyContent={matchSM ? "center" : "undefined"}
              sx={serviceContainer}
            >
              <Grid item>
                <Typography variant="h5">Website Development</Typography>
                <Typography variant="subtitle1">
                  Reach More. Discover More. Sell More
                </Typography>
                <Typography variant="subtitle1">
                  Optimize for Search Engines, built for speed.
                </Typography>
                <Button
                  sx={learnButtonStyles}
                  variant="contained"
                  component={Link}
                  to="/website"
                >
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
          </Grid>
          <Grid item>
            {/*   Mobile Apps Development Block */}
            <Grid
              container
              justifyContent={matchSM ? "center" : "flex-end"}
              sx={serviceContainer}
              style={{ marginBottom: "2rem" }}
            >
              <Grid item>
                <Typography variant="h5">Mobile Development</Typography>
                <Typography variant="subtitle1">
                  Extend Functionality. Extend Access. Extend Engagement.
                </Typography>
                <Typography variant="subtitle1">
                  Integrate your web experience or create a standalone app{" "}
                  {matchSM ? null : <br />} with either mobile platform.
                </Typography>
                <Button
                  sx={learnButtonStyles}
                  variant="contained"
                  component={Link}
                  to="/mobileapps"
                >
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
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default ServicesPage;

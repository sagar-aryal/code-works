import React from "react";
import { Link } from "react-router-dom";

import { iconStyles, mobileappsContainerStyles } from "./MobileAppsStyles";
import mobileapps from "../../assets/mobile_apps.png";
import functionality from "../../assets/functionality.png";
import access from "../../assets/access.png";
import engagement from "../../assets/engagement.png";

import { Grid, IconButton, Typography, Container, Hidden } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const MobileAppsPage = () => {
  return (
    <React.Fragment>
      <Container>
        <Grid container direction="column">
          <Grid item container style={{ marginBottom: "4rem" }}>
            <Hidden mdDown>
              <Grid item style={{ marginRight: "1rem" }}>
                <IconButton
                  style={{ backgroundColor: "transparent" }}
                  component={Link}
                  to="/software"
                >
                  <ArrowBack sx={iconStyles} />
                </IconButton>
              </Grid>
            </Hidden>
            <Grid
              item
              container
              direction="column"
              sx={mobileappsContainerStyles}
            >
              <Grid item>
                <Typography variant="h3">Mobile Apps Development</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" paragraph>
                  Mobile apps allow you to take your tools on the go.
                </Typography>
                <Typography variant="body1" paragraph>
                  Wheater you want an app for your customers, employees or
                  yourself, we can build cross-platfom native solutions for any
                  part of your business process.This opens you up to a whole new
                  world of possibilities by taking advantage of phone features
                  like the camera, GPS, push notifications and many more.
                </Typography>
                <Typography variant="body1" paragraph>
                  Convenience. Connection
                </Typography>
              </Grid>
            </Grid>
            <Hidden mdDown>
              <Grid item style={{ marginLeft: "1rem" }}>
                <IconButton
                  style={{ backgroundColor: "transparent" }}
                  component={Link}
                  to="/contact"
                >
                  <ArrowForward sx={iconStyles} />
                </IconButton>
              </Grid>
            </Hidden>
          </Grid>
          <Grid item container style={{ marginBottom: "4rem" }}>
            <Grid item container direction="column" md>
              <Grid item>
                <Typography variant="h5" glutterBottom>
                  Integration
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" paragraph>
                  Our technology enables an innate interconnection between web
                  and mobile applications, putting everything you need right in
                  one convenient place.
                </Typography>
                <Typography variant="body1" paragraph>
                  This allows you to extend your reach, reinvent interactions
                  and develop a strong relationship with your users and ever
                  before.
                </Typography>
              </Grid>
            </Grid>
            <Grid item container md justifyContent="center" alignItems="center">
              <img
                src={mobileapps}
                alt="mobileapps"
                width="250px"
                height="250px"
              />
            </Grid>
            <Grid item container direction="column" md>
              <Grid item>
                <Typography variant="h5" glutterBottom>
                  Simultaneous Platform Support
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" paragraph>
                  Our cutting-edge development process allows us to create apps
                  for iphone, Android and tablets - all the same time.
                </Typography>
                <Typography variant="body1" paragraph>
                  This significantly reduces costs and creates a more unified
                  brand experience across all devices.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            container
            style={{ marginTop: "8rem", marginBottom: "8rem" }}
          >
            <Grid
              item
              container
              direction="column"
              md
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="h5" glutterBottom>
                  Extend Functionality
                </Typography>
              </Grid>
              <Grid item>
                <img
                  src={functionality}
                  alt="extend functionality"
                  width="150px"
                  height="150px"
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              md
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="h5" glutterBottom>
                  Extend Access
                </Typography>
              </Grid>
              <Grid item>
                <img src={access} alt="access" width="150px" height="150px" />
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              md
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="h5" glutterBottom>
                  Increase Engagement
                </Typography>
              </Grid>
              <Grid item>
                <img
                  src={engagement}
                  alt="engagement"
                  width="150px"
                  height="150px"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default MobileAppsPage;

import React from "react";

import { iconStyles, softwareContainerStyles } from "./SoftwareStyles";
import lightbulb from "../../assets/lightbulb.png";
import cash from "../../assets/cash.png";
import watch from "../../assets/watch.png";

import { Grid, IconButton, Typography, Container, Hidden } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Link } from "react-router-dom";

const SoftwarePage = () => {
  return (
    <React.Fragment>
      <Container>
        <Grid container direction="column">
          <Grid item container>
            <Hidden mdDown>
              <Grid item style={{ marginRight: "1rem" }}>
                <IconButton
                  style={{ backgroundColor: "transparent" }}
                  component={Link}
                  to="/services"
                >
                  <ArrowBack sx={iconStyles} />
                </IconButton>
              </Grid>
            </Hidden>
            <Grid
              item
              container
              direction="column"
              sx={softwareContainerStyles}
            >
              <Grid item>
                <Typography variant="h3">Software Development</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" paragraph>
                  Weather we're replacing old software or inventing ne
                  solutions, Code Works is here to help your business tackle
                  technology.
                </Typography>
                <Typography variant="body1" paragraph>
                  Using regular commercial software leaves you with a lot of
                  stuff you don't need, without some of the stuff you do need,
                  and ultimately controls the way you work. Without using any
                  software at all your risk falling behind competitore and
                  missing out on huge savings from increased efficiency.
                </Typography>
                <Typography variant="body1" paragraph>
                  Our custom solution is designed from the ground up with your
                  needs, wants and goals at the core. This collaborative process
                  produces finely tuned software that is much more efffective at
                  improving your workflow and reducing costs than generalized
                  options.
                </Typography>
                <Typography variant="body1" paragraph>
                  We create exactly what you wantn, exactly how you want it.
                </Typography>
              </Grid>
            </Grid>
            <Hidden mdDown>
              <Grid item style={{ marginLeft: "1rem" }}>
                <IconButton
                  style={{ backgroundColor: "transparent" }}
                  component={Link}
                  to="/Website"
                >
                  <ArrowForward sx={iconStyles} />
                </IconButton>
              </Grid>
            </Hidden>
          </Grid>
          <Grid
            item
            container
            justify="center"
            style={{ marginTop: "8rem", marginBottom: "8rem" }}
          >
            <Grid
              item
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              md
              style={{ maxWidth: "40rem" }}
            >
              <Grid item>
                <Typography variant="h5">Save Energy</Typography>
              </Grid>
              <Grid item>
                <img
                  src={lightbulb}
                  alt="lightbulb"
                  width="150px"
                  height="150px"
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              alignItems="center"
              md
              style={{ maxWidth: "40rem" }}
            >
              <Grid item>
                <Typography variant="h5">Save Time</Typography>
              </Grid>
              <Grid item>
                <img src={watch} alt="lightbulb" width="150px" height="150px" />
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              alignItems="center"
              md
              style={{ maxWidth: "40rem" }}
            >
              <Grid item>
                <Typography variant="h5">Save Money</Typography>
              </Grid>
              <Grid item>
                <img src={cash} alt="lightbulb" width="150px" height="150px" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default SoftwarePage;

import React from "react";
import { Link } from "react-router-dom";

import { websiteContainerStyles, iconStyles } from "./WebsitePageStyles";
import analytics from "../../assets/analytics.png";
import ecommerce from "../../assets/ecommerce.png";
import SEO from "../../assets/SEO.png";
import theme from "../../theme/Theme";

import {
  Grid,
  IconButton,
  Typography,
  Container,
  Hidden,
  useMediaQuery,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const WebsitePage = () => {
  const matchSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <React.Fragment>
      <Container>
        <Grid container>
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
            <Grid item container direction="column" sx={websiteContainerStyles}>
              <Grid item>
                <Typography variant="h3">Website Development</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" paragraph>
                  Having a website is a necessity in today's business world.They
                  give you one central, public location to let people know who
                  you are, what you do and why you're the best at it.
                </Typography>
                <Typography variant="body1" paragraph>
                  For simply having hours posted to having a full flegged online
                  store, making yourself as accessible as possible to users
                  online drives growth and enables you to reach new customers.
                </Typography>
              </Grid>
            </Grid>
            <Hidden mdDown>
              <Grid item style={{ marginLeft: "1rem" }}>
                <IconButton
                  style={{ backgroundColor: "transparent" }}
                  component={Link}
                  to="/mobileapps"
                >
                  <ArrowForward sx={iconStyles} />
                </IconButton>
              </Grid>
            </Hidden>
          </Grid>
          <Grid
            item
            container
            justifyContent={matchSM ? "center" : "flex-start"}
            alignItems="center"
            style={{ marginBottom: "2rem" }}
          >
            <Grid item>
              <Grid container direction="column">
                <Grid item align={matchSM ? "center" : "undefined"}>
                  <Typography variant="h5" gutterBottom>
                    Analytics
                  </Typography>
                </Grid>
                <Grid item>
                  <img
                    src={analytics}
                    alt="analytics"
                    width="300px"
                    height="250px"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                style={{ maxWidth: "25rem" }}
              >
                Knowledge is power and data is 21st century gold. Analyzing this
                data can reveal hidden patterns and trends in your business,
                empowering you to make smarter decisions with measurable
                effects.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            justifyContent={matchSM ? "center" : "flex-end"}
            alignItems="center"
            style={{ marginBottom: "2rem" }}
          >
            <Grid item>
              <Grid container direction="column">
                <Grid item align={matchSM ? "center" : "undefined"}>
                  <Typography variant="h5" gutterBottom>
                    E-Commerce
                  </Typography>
                </Grid>
                <Grid item>
                  <img
                    src={ecommerce}
                    alt="ecommerce"
                    width="300px"
                    height="250px"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                style={{ maxWidth: "25rem" }}
              >
                It's no secret that people like to shop online.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                style={{ maxWidth: "25rem" }}
              >
                In 2021 over $2.3 trillion was spent in e-commerce and its time
                for your slice of pie.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            justifyContent={matchSM ? "center" : "flex-start"}
            alignItems="center"
            style={{ marginBottom: "4rem" }}
          >
            <Grid item>
              <Grid container direction="column">
                <Grid item align={matchSM ? "center" : "undefined"}>
                  <Typography variant="h5" gutterBottom>
                    Search Engine
                    <br /> Optimization
                  </Typography>
                </Grid>
                <Grid item>
                  <img src={SEO} alt="SEO" width="300px" height="250px" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                style={{ maxWidth: "25rem" }}
              >
                How often have you been to the second page of Google results? If
                you're like us, probably never.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                style={{ maxWidth: "25rem" }}
              >
                Customers don't go there either, so we make sure your website is
                designed to end up on top.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default WebsitePage;

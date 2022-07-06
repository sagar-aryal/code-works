import React from "react";

import {
  contentContainerStyles,
  revolutionContainerStyles,
} from "./RevolutionPageStyles";
import vision from "../../assets/vision.png";
import technology from "../../assets/technology.jpg";
import theme from "../../theme/Theme";

import { Container, Grid, Typography, useMediaQuery } from "@mui/material";

const RevolutionPage = () => {
  const matchLG = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <React.Fragment>
      <Container sx={revolutionContainerStyles}>
        <Grid container direction="column">
          <Grid item sx={revolutionContainerStyles}>
            <Typography variant="h3">The Revolution</Typography>
          </Grid>
          <Grid
            item
            container
            alignItems="center"
            justifyContent="center"
            sx={contentContainerStyles}
          >
            <Grid item lg marginBottom={matchLG ? "2rem" : " "}>
              <img
                src={vision}
                alt="vision"
                width="350px"
                height="350px"
                style={{ borderRadius: "50%" }}
              />
            </Grid>
            <Grid item container direction="column" lg>
              <Grid item>
                <Typography variant="h5" gutterBottom>
                  Vision
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" paragraph>
                  The rise of computers and subsequently the internet has
                  completely altered every aspect of human life.This has
                  increased our comfort broadened our connections and reshaped
                  how we view the world.
                </Typography>
                <Typography variant="body1" paragraph>
                  What once was confined to huge rooms and teams of engineers
                  now resides in every single one of our hands. Harnessing this
                  unlimited potential by using it to solve problems and better
                  lives is at the heart of everything we do.
                </Typography>
                <Typography variant="body1" paragraph>
                  We want to help business capitalize on the latest and greatest
                  technology. The best way to predict the future is to be the
                  one building it and we want to help guide the world into this
                  next chapter of technological expansion, exploration and
                  innovation.
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
          <Grid
            item
            container
            alignItems="center"
            justifyContent="center"
            sx={contentContainerStyles}
          >
            <Grid item container direction="column" lg>
              <Grid item>
                <Typography variant="h5" gutterBottom>
                  Technology
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" paragraph>
                  In 2013, Facebook invented a new way of building websites.
                  This new system, React.js, completely revolutionizes the
                  process and practice of website development.
                </Typography>
                <Typography variant="body1" paragraph>
                  Instead of chaining together long individual page, like
                  traditional websites, React websites are built with little
                  chunks of code called components.These components are faster,
                  easier to maintain and are easily reused and customized each
                  serving a singular purpose.
                </Typography>
                <Typography variant="body1" paragraph>
                  Two years later they shocked the world by releasing a similar
                  system, React Native for producing IOS and Android apps.
                  Instead of having master two completely separate development
                  platforms, you can leverage the knowledge you already
                  possessed from building websites and reapply it directly! This
                  was a huge leap forward.This technology is now being used by
                  companies like AirBnB, Microsoft, Netflix, Pintrest, Skype,
                  Tesla, UverEats and when Facebook purchased Instagram large
                  portions of it were even rebuilt using React.
                </Typography>
                <Typography variant="body1" paragraph>
                  Developers have since built on top of these systems by
                  automating project setup and deployment, allowing creators to
                  focus as much as possible on their work itself.These technical
                  advancements translate into savings by significantly reducing
                  the workload and streamlining the workflow for developing new
                  pieces of software, while also lowering the barrier to entry
                  for mobile app development.
                </Typography>
                <Typography variant="body1" paragraph>
                  This puts personalization in your pocket - faster, better and
                  more affordable than even before.
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              lg
              justifyContent={matchLG ? "center" : "flex-end"}
              marginTop={matchLG ? "2rem" : " "}
            >
              <img
                src={technology}
                alt="technology"
                width="350px"
                height="350px"
                style={{ borderRadius: "50%" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default RevolutionPage;

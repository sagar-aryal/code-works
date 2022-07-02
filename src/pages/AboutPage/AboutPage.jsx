import React from "react";

import { containerStyles, missionStyles } from "./AboutPageStyles";
import history from "../../assets/history.png";

import { Grid, Typography, Container } from "@mui/material";

const AboutPage = () => {
  return (
    <React.Fragment>
      <Container style={{ marginBottom: "4rem" }}>
        <Grid container direction="column">
          <Grid sx={containerStyles} item>
            <Typography variant="h3">About Us</Typography>
          </Grid>
          <Grid item align="center">
            <Typography sx={missionStyles} variant="h6" align="center">
              Wheather it be person to person, business to consumer, or an
              individual to their intresrs, technology is meant to bring us
              closer to what we care about in the best way possible. Code Work
              will use the principle to provide fast, modern, inexpensive and
              aesthetic software to the Europe and beyond.
            </Typography>
          </Grid>
          <Grid
            sx={containerStyles}
            item
            container
            justifyContent="space-around"
          >
            <Grid item container direction="column" lg>
              <Typography variant="h5" gutterBottom>
                History
              </Typography>
              <Grid item>
                <Typography
                  variant="body1"
                  paragraph
                  style={{ fontWeight: 700, fontStyle: "italic" }}
                >
                  We're the new kid on the block
                </Typography>
                <Typography variant="body1" paragraph>
                  Founded in 2021, we're ready to get our hands on the world's
                  business problems.
                </Typography>
                <Typography variant="body1" paragraph>
                  It all starts with one question.Why aren't all business using
                  available technology? There are many different answers to that
                  question: economic,barriers, social barriers, educational
                  barriers and sometimes institutional barriers.
                </Typography>
                <Typography variant="body1" paragraph>
                  We aim to be a powerful force in overcoming these
                  obstacles.Recent developments in software engineering and
                  computing power, compounded by the proliferation of smart
                  phones has opened up infinite worlds of possibility.Things
                  that has been always done by hands can now be done digitally
                  and automatically and completely new methods of interaction
                  are created daily.Taking full advantage of these advancements
                  is the name of the game.
                </Typography>
                <Typography variant="body1" paragraph>
                  All these change can be a lot to keep up with and that's where
                  we come in.
                </Typography>
              </Grid>
            </Grid>
            <Grid item container justifyContent="center" alignItems="center" lg>
              <img
                src={history}
                alt="company history"
                width="250px"
                height="250px"
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default AboutPage;

import React from "react";

import { iconStyles, softwareContainerStyles } from "./SoftwareStyles";

import { Grid, IconButton, Typography, Container } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const SoftwarePage = () => {
  return (
    <React.Fragment>
      <Container>
        <Grid container direction="column">
          <Grid item container>
            <Grid item>
              <IconButton style={{ backgroundColor: "transparent" }}>
                <ArrowBack sx={iconStyles} />
              </IconButton>
            </Grid>
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
            <Grid item>
              <IconButton style={{ backgroundColor: "transparent" }}>
                <ArrowForward sx={iconStyles} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default SoftwarePage;

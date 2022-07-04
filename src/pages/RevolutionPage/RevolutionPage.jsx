import React from "react";

import revolutionBackground from "../../assets/revolution.jpg";
import { cardStyles, revolutionBtnStyles } from "./RevolutionPageStyles";

import { Button, Card, CardContent, Grid, Typography } from "@mui/material";

const RevolutionPage = () => {
  return (
    <React.Fragment>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: "80vh", marginTop: "4rem", marginBottom: "4rem" }}
      >
        <Card sx={cardStyles}>
          <CardContent>
            <Grid container direction="column" sx={{ textAlign: "center" }}>
              <Grid item>
                <Typography variant="h4">The Revolution</Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  Visionary insights coupled with cutting-edge technology is a
                  recipe for revolution.
                </Typography>
                <Button variant="contained" sx={revolutionBtnStyles}>
                  Learn More
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <div
          style={{
            backgroundImage: `url(${revolutionBackground})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "100%",
            width: "100%",
          }}
        />
      </Grid>
    </React.Fragment>
  );
};

export default RevolutionPage;

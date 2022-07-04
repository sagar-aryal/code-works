import React from "react";
import { Link } from "react-router-dom";

import { FooterContainer, gridItemStyles, Item } from "./FooterStyle";

import { Grid } from "@mui/material";
import {
  FacebookOutlined,
  Instagram,
  YouTube,
  Twitter,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <FooterContainer>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        columnSpacing={{ xs: 1, sm: 2 }}
      >
        <Grid item sx={gridItemStyles}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Item item component={Link} to="/">
              Home
            </Item>
            <Item item component={Link} to="/about">
              About
            </Item>
            <Item item component={Link} to="/revolution">
              Revolution
            </Item>
            <Item item component={Link} to="/contact">
              Contact
            </Item>
          </Grid>
        </Grid>
        <Grid item sx={gridItemStyles}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Item item component={Link} to="/services">
              Services
            </Item>
            <Item item component={Link} to="/software">
              Software Development
            </Item>
            <Item item component={Link} to="/website">
              Website Development
            </Item>
            <Item item component={Link} to="/mobileapps">
              Mobile Apps Development
            </Item>
          </Grid>
        </Grid>
        <Grid item sx={gridItemStyles}>
          <Grid
            container
            justifyContent="center"
            alignItems="flex-start"
            columnGap={2}
          >
            <Item item component={Link} to="/">
              <FacebookOutlined />
            </Item>
            <Item item component={Link} to="/">
              <Instagram />
            </Item>
            <Item item component={Link} to="/">
              <YouTube />
            </Item>
            <Item item component={Link} to="/">
              <Twitter />
            </Item>
          </Grid>
        </Grid>
      </Grid>
    </FooterContainer>
  );
};

export default Footer;

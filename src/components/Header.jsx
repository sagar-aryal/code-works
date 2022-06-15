import React from "react";

import { AppBar, Toolbar, Typography, Tabs, Tab } from "@mui/material";

const Header = () => {
  return (
    <AppBar>
      <Toolbar disableGutters={true}>
        <Typography
          variant="h5"
          sx={{
            backgroundColor: "#221266",
            padding: "5px 10px",
            borderRadius: " 0 5px 5px 0",
            height: "3rem",
          }}
        >
          Code Works
        </Typography>
        <Tabs sx={{ marginLeft: "auto" }}>
          <Tab label="Home" />
          <Tab label="About" />
          <Tab label="Revolution" />
          <Tab label="Services" />
          <Tab label="Contact" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

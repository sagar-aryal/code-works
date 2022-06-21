import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Import components
import logo from "../assets/logo.jpeg";
import {
  buttonStyles,
  logoContainer,
  logoStyles,
  menuItemStyles,
  menuStyles,
  tabsStyles,
  tabStyles,
} from "./HeaderStyle";

// Import MUI components for styling
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";

const Header = () => {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  // Onchange event for active tab
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Onclick events for menu tab
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  // Active to right tab even after refreshing page
  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/about" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/revolution" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/services" && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === "/contact" && value !== 4) {
      setValue(4);
    }
  }, [value]);

  return (
    <>
      <AppBar position="sticky">
        <Toolbar disableGutters={true}>
          <Button
            sx={logoContainer}
            component={Link}
            to="/"
            onClick={() => setValue(0)}
            disableRipple
          >
            <img
              sx={logoStyles}
              src={logo}
              alt="company logo"
              width="150px"
              height="100px"
            />
          </Button>

          <Tabs
            sx={tabsStyles}
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
          >
            <Tab sx={tabStyles} label="Home" component={Link} to="/" />
            <Tab sx={tabStyles} label="About" component={Link} to="/about" />
            <Tab
              sx={tabStyles}
              label="Revolution"
              component={Link}
              to="/revolution"
            />
            <Tab
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onMouseOver={handleClick}
              sx={tabStyles}
              label="Services"
              component={Link}
              to="/services"
            />
            <Menu
              sx={menuStyles}
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              MenuListProps={{ onMouseLeave: handleClose }}
            >
              <MenuItem
                sx={menuItemStyles}
                onClick={() => {
                  handleClose();
                  setValue(3);
                }}
                component={Link}
                to="/services"
              >
                Services
              </MenuItem>
              <MenuItem
                sx={menuItemStyles}
                onClick={() => {
                  handleClose();
                  setValue(3);
                }}
                component={Link}
                to="/software"
              >
                Software Development
              </MenuItem>
              <MenuItem
                sx={menuItemStyles}
                onClick={() => {
                  handleClose();
                  setValue(3);
                }}
                component={Link}
                to="/website"
              >
                Website Development
              </MenuItem>
              <MenuItem
                sx={menuItemStyles}
                onClick={() => {
                  handleClose();
                  setValue(3);
                }}
                component={Link}
                to="/mobileapps"
              >
                Mobile App Development
              </MenuItem>
            </Menu>
            <Tab
              sx={tabStyles}
              label="Contact"
              component={Link}
              to="/contact"
            />
          </Tabs>
          <Button sx={buttonStyles} variant="contained">
            Free Estimate
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;

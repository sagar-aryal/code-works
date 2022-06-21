import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Import components
import {
  buttonStyles,
  iconButtonStyles,
  listItemsTextStyles,
  listItemButtonStyles,
  logoContainer,
  logoStyles,
  menuIconStyles,
  menuItemStyles,
  menuStyles,
  swipeDrawerStyles,
  tabsStyles,
  tabStyles,
  listItemStyles,
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
  useTheme,
  useMediaQuery,
  Typography,
  SwipeableDrawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { MenuOpen } from "@mui/icons-material";

const Header = () => {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  // For swippable drawer for optimal usability of the component
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  // Onchange event for active tab
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Onclick events for menu tab
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleMenuItems = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    setOpenMenu(false);
  };

  // Onclick events for active listitems
  const handleListItemClick = (event, index) => {
    setValue(index);
  };

  const menuItems = [
    { name: "Services", link: "/services" },
    { name: "Software Development", link: "/software" },
    { name: "Website Development", link: "/website" },
    { name: "Mobile Apps Development", link: "/mobileapps" },
  ];

  // Active to right tab even after refreshing page
  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        if (value !== 0) {
          setValue(0);
        }
        break;

      case "/about":
        if (value !== 1) {
          setValue(1);
        }
        break;

      case "/revolution":
        if (value !== 2) {
          setValue(2);
        }
        break;

      case "/services":
        if (value !== 3) {
          setValue(3);
          setSelectedIndex(0);
        }
        break;

      case "/software":
        if (value !== 3) {
          setValue(3);
          setSelectedIndex(1);
        }
        break;

      case "/website":
        if (value !== 3) {
          setValue(3);
          setSelectedIndex(2);
        }
        break;

      case "/mobileapps":
        if (value !== 3) {
          setValue(3);
          setSelectedIndex(3);
        }
        break;

      case "/contact":
        if (value !== 4) {
          setValue(4);
        }
        break;

      default:
        break;
    }
  }, [value]);

  // For Desktop and large screens
  const tabs = (
    <>
      <Tabs
        sx={tabsStyles}
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        centered
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
          id="basic-button"
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup={anchorEl ? true : undefined}
          onMouseOver={(e) => handleClick(e)}
          sx={tabStyles}
          label="Services"
          component={Link}
          to="/services"
        />
        <Menu
          sx={menuStyles}
          id="basic-menu"
          anchorEl={anchorEl}
          open={openMenu}
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
          elevation={0}
        >
          {menuItems.map((items, index) => (
            <MenuItem
              sx={menuItemStyles}
              key={items.name}
              component={Link}
              to={items.link}
              onClick={(e) => {
                handleMenuItems(e, index);
                setValue(3);
                handleClose();
              }}
              selected={index === selectedIndex && value === 1}
            >
              {items.name}
            </MenuItem>
          ))}
        </Menu>
        <Tab sx={tabStyles} label="Contact" component={Link} to="/contact" />
      </Tabs>
      <Button
        sx={buttonStyles}
        variant="contained"
        disableRipple
        component={Link}
        to="/login"
      >
        Login
      </Button>
    </>
  );

  // For Mobile and small screens
  const drawer = (
    <>
      <SwipeableDrawer
        sx={swipeDrawerStyles}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <List disablePadding>
          <ListItemButton
            sx={listItemStyles}
            divider
            disableRipple
            component={Link}
            to="/"
            onClick={(event) => {
              setOpenDrawer(false);
              handleListItemClick(event, 0);
            }}
            selected={value === 0}
          >
            <ListItemText sx={listItemsTextStyles}> Home</ListItemText>
          </ListItemButton>
          <ListItemButton
            sx={listItemStyles}
            divider
            component={Link}
            to="/about"
            onClick={(event) => {
              setOpenDrawer(false);
              handleListItemClick(event, 1);
            }}
            selected={value === 1}
          >
            <ListItemText sx={listItemsTextStyles}>About</ListItemText>
          </ListItemButton>
          <ListItemButton
            sx={listItemStyles}
            divider
            disableRipple
            component={Link}
            to="/revolution"
            onClick={(event) => {
              setOpenDrawer(false);
              handleListItemClick(event, 2);
            }}
            selected={value === 2}
          >
            <ListItemText sx={listItemsTextStyles}> Revolution</ListItemText>
          </ListItemButton>
          <ListItemButton
            sx={listItemStyles}
            divider
            disableRipple
            component={Link}
            to="/services"
            onClick={(event) => {
              setOpenDrawer(false);
              handleListItemClick(event, 3);
            }}
            selected={value === 3}
          >
            <ListItemText sx={listItemsTextStyles}>Services</ListItemText>
          </ListItemButton>
          <ListItemButton
            sx={listItemStyles}
            divider
            disableRipple
            component={Link}
            to="/contact"
            onClick={(event) => {
              setOpenDrawer(false);
              handleListItemClick(event, 4);
            }}
            selected={value === 4}
          >
            <ListItemText sx={listItemsTextStyles}>Contact</ListItemText>
          </ListItemButton>
          <ListItemButton
            sx={[listItemsTextStyles, listItemButtonStyles]}
            divider
            disableRipple
            component={Link}
            to="/login"
            onClick={() => setOpenDrawer(false)}
          >
            <ListItemText component={Link} to="/login">
              Login
            </ListItemText>
          </ListItemButton>
        </List>
      </SwipeableDrawer>
      <IconButton
        disableRipple
        sx={iconButtonStyles}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuOpen sx={menuIconStyles} />
      </IconButton>
    </>
  );

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Button
            sx={logoContainer}
            component={Link}
            to="/"
            onClick={() => setValue(0)}
            disableRipple
          >
            <Typography sx={logoStyles} variant="h4" component="div">
              CodeWorks
            </Typography>
          </Button>
          {matches ? drawer : tabs}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;

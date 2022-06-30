import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Import components
import {
  appBarStyles,
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
    { name: "Services", link: "/services", activeIndex: 3, selectedIndex: 0 },
    {
      name: "Software Development",
      link: "/software",
      activeIndex: 3,
      selectedIndex: 1,
    },
    {
      name: "Website Development",
      link: "/website",
      activeIndex: 3,
      selectedIndex: 2,
    },
    {
      name: "Mobile Apps Development",
      link: "/mobileapps",
      activeIndex: 3,
      selectedIndex: 3,
    },
  ];

  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    { name: "About", link: "/about", activeIndex: 1 },
    { name: "Revolution", link: "/revolution", activeIndex: 2 },
    {
      name: "Services",
      link: "/services",
      activeIndex: 3,
      anchorEl: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? true : undefined,
      mouseOver: (e) => handleClick(e),
    },
    { name: "Contact", link: "/contact", activeIndex: 4 },
  ];

  // Active to right tab even after refreshing page

  useEffect(() => {
    [...menuItems, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
          }
          if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
            setSelectedIndex(route.selectedIndex);
          }
          break;
        default:
          break;
      }
    });
  }, [value, menuItems, selectedIndex, routes]);

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
        {routes.map((route) => (
          <Tab
            key={route.link}
            sx={tabStyles}
            component={Link}
            label={route.name}
            to={route.link}
            aria-owns={route.anchorEl}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}

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
          keepMounted
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
          {routes.map((route) => (
            <ListItemButton
              key={route.link}
              sx={listItemStyles}
              divider
              disableRipple
              component={Link}
              to={route.link}
              onClick={(event) => {
                setOpenDrawer(false);
                handleListItemClick(event, route.activeIndex);
              }}
              selected={value === route.activeIndex}
            >
              <ListItemText sx={listItemsTextStyles}>{route.name}</ListItemText>
            </ListItemButton>
          ))}

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
      <AppBar sx={appBarStyles}>
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
          {matches && matches ? drawer : tabs}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;

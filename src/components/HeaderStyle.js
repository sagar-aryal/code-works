import theme from "../styles/Theme";

export const appBarStyles = {
  position: "sticky",
  zIndex: theme.zIndex.modal + 1,
};

export const logoContainer = {
  height: "7rem",
  padding: 0,
  "&: hover": {
    opacity: 0.6,
  },
  [theme.breakpoints.down("md")]: {
    height: "5rem",
  },
};

export const logoStyles = {
  color: theme.palette.secondary.main,
  fontFamily: "Parisienne",
  fontWeight: "700",
  textTransform: "none",
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },
};

export const tabsStyles = {
  marginLeft: "auto",
};

export const tabStyles = {
  fontFamily: "Raleway",
  textTransform: "none",
  fontWeight: "700",
  fontSize: "0.9rem",
  minWidth: "10px",
  marginLeft: "25px",
  color: "whitesmoke",
};

export const menuStyles = {
  zIndex: 1302,
  "& .MuiMenu-paper": {
    background: theme.palette.primary.main,
    borderRadius: "0px",
  },
};

export const menuItemStyles = {
  fontSize: "0.9rem",
  color: "#fff",
  opacity: 0.6,
  "&: hover": {
    opacity: 1,
  },
};

export const buttonStyles = {
  fontSize: "0.9rem",
  marginLeft: "auto",
  textTransform: "none",
  "&: hover": {
    backgroundColor: theme.palette.secondary.main,
    color: "#000",
  },
};

export const iconButtonStyles = {
  marginLeft: "auto",
  "&: hover": {
    opacity: "0.6",
  },
};

export const menuIconStyles = {
  width: "40px",
  height: "40px",
  color: "#fff",
  marginLeft: "auto",
};

export const swipeDrawerStyles = {
  "& .MuiDrawer-paper": {
    background: theme.palette.primary.main,
    minWidth: "180px",
    top: "5rem",
    left: 0,
  },
};

export const listItemStyles = {
  "&: hover": {
    backgroundColor: "rgba(0, 0, 0 ,0.6)",
  },
};

export const listItemsTextStyles = {
  color: "#fff",
};

export const listItemButtonStyles = {
  backgroundColor: theme.palette.secondary.main,
  color: "#000",
  "&: hover": {
    color: "#fff",
  },
};

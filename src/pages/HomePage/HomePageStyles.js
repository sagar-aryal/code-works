import theme from "../../theme/Theme";

export const imageItemStyles = {
  maxWidth: "350px",
  minWidth: "200px",
  minHeight: "200px",
  marginTop: "20px",
  marginLeft: "10vw",
};

export const mediaCardStyles = {
  height: "100%",
  width: "100%",
  objectFit: "contain",
};

export const homeContainerStyles = {
  color: theme.palette.secondary.main,
  marginTop: "2rem",

  [theme.breakpoints.down("sm")]: {
    fontSize: "10px",
  },
};

export const typographyStyles = {
  fontWeight: 600,
  lineHeight: 1.4,
  color: theme.palette.primary.main,
};

export const buttonStyles = {
  color: theme.palette.secondary.main,
  marginTop: "20px",
  marginBottom: "20px",
};

export const gridItemStyles = {
  [theme.breakpoints.down("sm")]: {
    fontSize: "10px",
    textAlign: "center",
  },
};

import theme from "../../theme/Theme";

export const missionStyles = {
  fontStyle: "italic",
  fontWeight: 300,
  fontSize: "1.5rem",
  maxWidth: "50rem",
  lineHeight: 1.4,
};

export const containerStyles = {
  marginTop: "2rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "10px",
  },
};

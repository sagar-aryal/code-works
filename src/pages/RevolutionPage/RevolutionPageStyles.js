import theme from "../../theme/Theme";

export const cardStyles = {
  position: "absolute",
  borderRadius: 10,
  paddingTop: "4rem",
  paddingBottom: "4rem",
  paddingLeft: "2rem",
  paddingRight: "2rem",
  [theme.breakpoints.down("sm")]: {
    paddingTop: "1rem",
    paddingBottom: "1rem",
    paddingLeft: 0,
    paddingRight: 0,
    borderRadius: 0,
    width: "100%",
  },
};

export const revolutionBtnStyles = {
  fontSize: "0.5rem",
  padding: 1,
  borderRadius: 5,
  marginTop: "1rem",
};

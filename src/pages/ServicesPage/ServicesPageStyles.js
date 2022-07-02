import styled from "@emotion/styled";
import theme from "../../theme/Theme";

export const serviceContainer = {
  marginTop: "2rem",
  marginBottom: "2rem",
};

export const SpecialText = styled("span")({
  color: theme.palette.secondary.main,
  fontFamily: "Parisienne",
  fontSize: "1rem",
  fontWeight: 700,
});

export const learnButtonStyles = {
  fontSize: "0.5rem",
  padding: 1,
  borderRadius: 5,
  [theme.breakpoints.down("xs")]: {
    marginTop: "3rem",
    marginBottom: "2rem",
  },
};

export const softwareImageStyles = {
  marginLeft: "2rem",
  [theme.breakpoints.down("xs")]: {
    marginLeft: 0,
  },
};

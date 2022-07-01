import { styled } from "@mui/styles";
import theme from "../../theme/Theme";

export const servicesTitleStyles = {
  color: theme.palette.primary.main,
  fontWeight: 600,
  marginTop: "20px",
  lineHeight: 2,
};

export const servicesSubtitleStyles = {
  color: "#868686",
  fontWeight: 300,
  lineHeight: 1,
};

export const Span = styled("span")({
  fontFamily: "Parisienne",
  fontWeight: 600,
  fontSize: "1.8rem",
  color: theme.palette.secondary.main,
});

export const buttonStyles = {
  marginTop: "20px",
};

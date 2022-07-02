import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

// Customizing footer styles using styled modules from mui packages.
export const FooterContainer = styled("div")(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  width: "100%",
  zIndex: 1302,
  position: "relative",
}));

export const gridItemStyles = {
  margin: "2rem",
};

export const Item = styled(Grid)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  textDecoration: "none",
  "&: hover": {
    opacity: 0.6,
  },
}));

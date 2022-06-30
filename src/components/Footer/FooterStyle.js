import { styled } from "@mui/material/styles";

export const FooterContainer = styled("div")(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  width: "100%",
}));

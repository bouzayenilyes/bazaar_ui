import styled from "@mui/material/styles/styled";
import { Paragraph } from "components/Typography";
import { layoutConstant } from "utils/constants";

// USED IN ALL PRODUCTS & CAROUSELS COMPONENT
export const SubTitle = styled(Paragraph)(({ theme }) => ({
  fontSize: 12,
  marginTop: "-20px",
  marginBottom: "20px",
  color: theme.palette.grey[600]
}));

// USED IN PAGE VIEW
export const ContentWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  position: "relative",

  ".sidebar": {
    width: "100%",
    height: "100%",
    position: "sticky",
    top: layoutConstant.headerHeight + 15,
    maxWidth: layoutConstant.grocerySidenavWidth,
    [theme.breakpoints.down("md")]: { display: "none" }
  },

  ".content": {
    width: "100%",
    paddingLeft: "2rem",
    maxWidth: `calc(100% - ${layoutConstant.grocerySidenavWidth}px)`,
    [theme.breakpoints.down("md")]: { maxWidth: "100%", paddingLeft: 0 }
  }
}));

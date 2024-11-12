import styled from "@mui/material/styles/styled";
import Container from "@mui/material/Container";
import { layoutConstant } from "utils/constants";

/** USED IN SIDEBAR */
export const StyledContainer = styled(Container)(({ theme }) => ({
  gap: "1.75rem",
  display: "flex",
  // padding: "0 !important",
  ".sidenav": {
    top: 0,
    bottom: 0,
    position: "relative",
    transition: "all 350ms ease-in-out",
    width: layoutConstant.grocerySidenavWidth,
    minWidth: layoutConstant.grocerySidenavWidth,
    // height: `calc(100vh - ${layoutConstant.headerHeight}px)`,
    "& .MuiPaper-root": { borderRadius: 0, backgroundColor: "transparent" },
    [theme.breakpoints.down("md")]: { display: "none" }
  },
  ".pageContent": {
    left: "unset",
    position: "relative",
    width: `calc(100% - ${layoutConstant.grocerySidenavWidth}px)`,
    [theme.breakpoints.down("md")]: { width: "100%", marginLeft: 0 }
  }
}));

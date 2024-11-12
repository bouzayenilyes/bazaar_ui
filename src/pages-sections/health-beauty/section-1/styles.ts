import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import styled from "@mui/material/styles/styled";

// STYLED COMPONENTS
export const StyledGrid = styled(Grid)(({ theme }) => ({
  margin: "auto",
  //   maxWidth: 1200,
  position: "relative",
  alignItems: "center",
  padding: "2rem 0px 5rem 0px",
  [theme.breakpoints.down("sm")]: { flexDirection: "column-reverse" }
}));

export const GridItemOne = styled(Grid)(({ theme }) => ({
  padding: 20,
  ".title": {
    fontSize: 35,
    maxWidth: 380,
    lineHeight: 1.3,
    marginBottom: 30,
    [theme.breakpoints.down("md")]: { fontSize: 30 },
    [theme.breakpoints.up("lg")]: { fontSize: 48, maxWidth: 480 }
  },
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    ".title": { fontSize: 25 }
  }
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  fontWeight: 400,
  fontSize: "14px",
  paddingInline: 25,
  background: theme.palette.primary.main,
  "&:hover": { background: theme.palette.primary[400] }
}));

export const GridItemTwo = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: { display: "none" }
}));

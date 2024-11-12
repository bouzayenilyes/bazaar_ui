import styled from "@mui/material/styles/styled";

export const ServiceCard = styled("div")(({ theme }) => ({
  gap: 16,
  display: "flex",
  flexWrap: "wrap",
  padding: "1.5rem",
  background: "#fff",
  borderRadius: "8px",
  alignItems: "center",
  boxShadow: theme.shadows[2],
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    padding: "1rem 0.5rem",
    flexDirection: "column"
  }
}));

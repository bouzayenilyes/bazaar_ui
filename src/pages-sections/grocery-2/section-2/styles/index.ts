import styled from "@mui/material/styles/styled";

// STYLED COMPONENT
export const ServiceCard = styled("div")(({ theme }) => ({
  gap: "1rem",
  display: "flex",
  flexWrap: "wrap",
  padding: "1.5rem",
  borderRadius: "8px",
  alignItems: "center",
  border: `1px solid ${theme.palette.grey[400]}`,
  [theme.breakpoints.between("sm", "md")]: {
    textAlign: "center",
    padding: "1rem 0.5rem",
    flexDirection: "column"
  }
}));

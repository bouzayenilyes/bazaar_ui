import Card from "@mui/material/Card";
import styled from "@mui/material/styles/styled";

export const DiscountWrapper = styled(Card)(({ theme }) => ({
  padding: "50px",
  marginBottom: "3rem",
  transition: "all 0.3s",
  backgroundColor: theme.palette.grey[100],
  [theme.breakpoints.down("sm")]: {
    marginInline: "auto",
    padding: "30px 20px",
    "& .content": {
      marginBottom: 30,
      textAlign: "center",
      "& h1": { fontSize: 25 }
    }
  }
}));

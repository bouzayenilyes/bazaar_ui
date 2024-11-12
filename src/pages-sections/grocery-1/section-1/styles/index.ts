"use client";

import styled from "@mui/material/styles/styled";
import SearchOutlined from "@mui/icons-material/SearchOutlined";

const LEFT_IMG = "/assets/images/headers/grocery-1.png";
const RIGHT_IMG = "/assets/images/headers/grocery-2.png";

// USED IN SECTION 1
export const SectionContainer = styled("div")(({ theme }) => ({
  height: 650,
  padding: 20,
  width: "100%",
  paddingTop: 160,
  backgroundSize: "40%, 40%",
  // backgroundColor: theme.palette.grey[100],
  backgroundPosition: "left bottom, right bottom",
  backgroundRepeat: "no-repeat, no-repeat",
  transition: "all .3s",
  backgroundImage:
    theme.direction === "ltr"
      ? `url('${LEFT_IMG}'), url('${RIGHT_IMG}')`
      : `url('${RIGHT_IMG}'), url('${LEFT_IMG}')`,

  "& h1": {
    fontSize: 42,
    textAlign: "center",
    marginBottom: 40,
    lineHeight: 1.3
  },
  "& .searchBox": {
    margin: "auto",
    maxWidth: "600px",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: theme.shadows[2]
  },
  [theme.breakpoints.up("md")]: {
    backgroundSize: "450px, 450px"
  },
  [theme.breakpoints.down("md")]: {
    height: 550,
    paddingTop: 130,
    "& h1": { fontSize: 38, textAlign: "center" }
  },
  [theme.breakpoints.down("sm")]: {
    height: 480,
    paddingTop: 100,
    "& h1": { fontSize: 30 },
    "& .searchBox": { margin: 0 }
  }
}));

export const SearchOutlinedIcon = styled(SearchOutlined)(({ theme }) => ({
  color: theme.palette.grey[600],
  marginRight: 6
}));

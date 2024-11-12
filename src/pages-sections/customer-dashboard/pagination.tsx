import MuiPagination, { PaginationProps } from "@mui/material/Pagination";

export default function Pagination(props: PaginationProps) {
  return <MuiPagination sx={{ display: "flex", justifyContent: "center", mt: 5 }} {...props} />;
}

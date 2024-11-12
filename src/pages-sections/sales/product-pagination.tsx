import { ChangeEvent } from "react";
import Pagination from "@mui/material/Pagination";
// CUSTOM GLOBAL COMPONENTS
import { Span } from "components/Typography";
import FlexBetween from "components/flex-box/flex-between";
// CUSTOM UTILITY FUNCTION
import { renderProductCount } from "lib";

// ==============================================================
interface Props {
  page: number;
  perPage: number;
  totalProducts: number;
  handlePageChange: (e: ChangeEvent<unknown>, page: number) => void;
}
// ==============================================================

export default function ProductPagination({
  page,
  perPage,
  totalProducts,
  handlePageChange
}: Props) {
  return (
    <FlexBetween flexWrap="wrap" my={8}>
      <Span>{renderProductCount(page, perPage, totalProducts)}</Span>

      <Pagination
        page={page}
        color="primary"
        variant="outlined"
        onChange={handlePageChange}
        count={Math.ceil(totalProducts / perPage)}
      />
    </FlexBetween>
  );
}

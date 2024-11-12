import Rating from "@mui/material/Rating";
import { BoxProps } from "@mui/material/Box";
// GLOBAL CUSTOM COMPONENTS
import { Span } from "components/Typography";
import FlexBox from "components/flex-box/flex-box";

// ==============================================================
interface Props extends BoxProps {
  rating: number;
  showRating: boolean;
}
// ==============================================================

export default function ProductRating({ showRating, rating = 0, ...props }: Props) {
  if (showRating) {
    return (
      <FlexBox gap={1} alignItems="center" {...props}>
        <Rating size="small" value={rating} color="warn" readOnly />
        <Span color="grey.600">({rating})</Span>
      </FlexBox>
    );
  }
  return null;
}

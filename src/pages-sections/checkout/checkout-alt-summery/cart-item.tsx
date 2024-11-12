// GLOBAL CUSTOM COMPONENTS
import { FlexBetween } from "components/flex-box";
import { Paragraph, Span } from "components/Typography";
// CUSTOM UTILS LIBRARY FUNCTION
import { currency } from "lib";

// ==============================================================
interface Props {
  qty: number;
  name: string;
  price: number;
}
// ==============================================================

export default function CartItem({ name, price, qty }: Props) {
  return (
    <FlexBetween mb={1.5}>
      <Paragraph>
        <Span fontWeight="700">{qty}</Span> x {name}
      </Paragraph>

      <Paragraph>{currency(price)}</Paragraph>
    </FlexBetween>
  );
}

import Link from "next/link";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { NavLink } from "components/nav-link";
import { Paragraph, Span } from "components/Typography";
// STYLED COMPONENT
import { RootStyle } from "./styles";
// CUSTOM UTILS LIBRARY FUNCTIONS
import { calculateDiscount, currency } from "lib";
// CUSTOM DATA MODEL
import Product from "models/Product.model";

// ===========================================
type Props = { product: Product };
// ===========================================

export default function ProductCard({ product }: Props) {
  const { slug, thumbnail, title, price, discount, categories } = product || {};

  return (
    <RootStyle>
      <Link href={`/products/${slug}`}>
        <div className="img-wrapper">
          <LazyImage width={100} height={100} alt="product" src={thumbnail} />
        </div>
      </Link>

      <div className="content">
        {categories.length ? (
          <Paragraph color="grey.600" fontSize={12}>
            {categories[0]}
          </Paragraph>
        ) : null}

        <NavLink href="/">
          <Paragraph ellipsis fontWeight={600}>
            {title}
          </Paragraph>
        </NavLink>

        <Paragraph mt={1} fontSize={16} fontWeight={700}>
          {calculateDiscount(price, discount)}

          {discount ? (
            <Span ml={1} component="del" fontWeight={600} color="grey.600">
              {currency(price)}
            </Span>
          ) : null}
        </Paragraph>
      </div>
    </RootStyle>
  );
}

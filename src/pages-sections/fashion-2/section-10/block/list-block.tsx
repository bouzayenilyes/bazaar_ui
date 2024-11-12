import { Fragment } from "react";
import Link from "next/link";
import Rating from "@mui/material/Rating";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { NavLink } from "components/nav-link";
import { H3, Paragraph } from "components/Typography";
// CUSTOM UTILS LIBRARY FUNCTIONS
import { currency } from "lib";
// STYLED COMPONENT
import { Wrapper } from "./styles";
// CUSTOM DATA MODEL
import Product from "models/Product.model";

// ===========================================
interface Props {
  title: string;
  products: Product[];
}
// ===========================================

export default function ListBlock({ title, products }: Props) {
  return (
    <Fragment>
      <H3 mb={3}>{title}</H3>

      {products.map((product) => (
        <Wrapper key={product.id}>
          <Link href={`/products/${product.slug}`}>
            <div className="img-wrapper">
              <LazyImage width={100} height={100} alt="product" src={product.thumbnail} />
            </div>
          </Link>

          <div>
            <NavLink href="/">
              <Paragraph fontSize={16} mb={1}>
                {product.title}
              </Paragraph>
            </NavLink>

            <Paragraph fontWeight={700}>{currency(product.price)}</Paragraph>
            <Rating readOnly value={4} sx={{ fontSize: 14 }} />
          </div>
        </Wrapper>
      ))}
    </Fragment>
  );
}

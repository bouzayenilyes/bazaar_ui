import { NavLink2 } from "components/nav-link";
import { H1, Paragraph, Span } from "components/Typography";
// STYLED COMPONENTS
import { StyledImage, StyledRoot } from "./styles";
// IMPORT IMAGE
import img from "../../../../../public/assets/images/products/shoes-1.png";

export default function Card1() {
  return (
    <StyledRoot>
      <StyledImage alt="apple-watch-1" src={img} />

      <div className="content">
        <Paragraph mb={1} color="grey.500">
          SPECIAL OFFER
        </Paragraph>

        <H1 lineHeight={1.3}>
          <Span lineHeight={1.3} color="primary.main">
            Comfortable
          </Span>{" "}
          Original <br /> Cotton Sneaker
        </H1>

        <Paragraph mt={1} mb={2}>
          Handcrafted from genuine Italian leather. One inner compartment with black satin lining
        </Paragraph>

        <NavLink2 url="/shops/scarlett-beauty" title="SHOP NOW" borderColor="primary.main" />
      </div>
    </StyledRoot>
  );
}

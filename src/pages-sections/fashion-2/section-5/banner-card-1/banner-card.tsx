import Link from "next/link";
import Button from "@mui/material/Button";
// GLOBAL CUSTOM COMPONENTS
import BazaarImage from "components/BazaarImage";
import { H1, H3, Paragraph } from "components/Typography";
// STYLED COMPONENTS
import { CardContent, CardWrapper } from "./styles";

// ========================================================
interface Props {
  img: string;
  url: string;
  text1: string;
  text2: string;
  text3: string;
}
// ========================================================

export default function BannerCard1({ img, url, text1, text2, text3 }: Props) {
  return (
    <CardWrapper>
      <BazaarImage alt="category" height="100%" width="100%" src={img} />

      <CardContent>
        <div>
          <Paragraph fontWeight={600}>{text1}</Paragraph>
          <H3>{text2}</H3>
          <H1 fontSize={52} lineHeight={1}>
            {text3}
          </H1>
        </div>

        <Button LinkComponent={Link} href={url} size="large" variant="outlined" color="info">
          Shop Now
        </Button>
      </CardContent>
    </CardWrapper>
  );
}

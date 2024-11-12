import Link from "next/link";
import Divider from "@mui/material/Divider";
import { BoxProps } from "@mui/material/Box";
// GLOBAL CUSTOM COMPONENTS
import BazaarImage from "components/BazaarImage";
import { H2, Paragraph } from "components/Typography";
// STYLED COMPONENTS
import { CardWrapper, CardContent, CardLink } from "./styles";

// ========================================================
interface Props extends BoxProps {
  img: string;
  url: string;
  title: string;
  subTitle: string;
  contentPosition?: "left" | "right";
}
// ========================================================

export default function BannerCard2({
  img,
  url,
  title,
  subTitle,
  contentPosition = "left",
  ...props
}: Props) {
  return (
    <CardWrapper {...props}>
      <BazaarImage alt="category" height="100%" width="100%" src={img} />

      <CardContent contentAlign={contentPosition} className="content">
        <H2>{title}</H2>
        <Paragraph>{subTitle}</Paragraph>
        <Divider sx={{ borderWidth: 2, my: 1.5, width: 50 }} />

        <Link href={url}>
          <CardLink>Shop Now</CardLink>
        </Link>
      </CardContent>
    </CardWrapper>
  );
}

import Link from "next/link";
import { SxProps, Theme } from "@mui/material/styles";
// GLOBAL CUSTOM COMPONENTS
import { H5 } from "components/Typography";
import LazyImage from "components/LazyImage";
// STYLED COMPONENT
import { StyledCard } from "./styles";

// ========================================================================
interface Props {
  title: string;
  imgUrl: string;
  headingStyle?: SxProps<Theme>;
}
// ========================================================================

export default function Card2({ imgUrl, title, headingStyle }: Props) {
  return (
    <Link href="/sales-1">
      <StyledCard>
        <LazyImage alt={title} src={imgUrl} width={527} height={532} />
        <H5 sx={headingStyle ? headingStyle : { pb: "1rem", pl: "1.5rem" }}>{title}</H5>
      </StyledCard>
    </Link>
  );
}

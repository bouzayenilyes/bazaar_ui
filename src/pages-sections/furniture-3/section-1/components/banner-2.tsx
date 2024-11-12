import { PropsWithChildren } from "react";
import Link from "next/link";
// GLOBAL CUSTOM COMPONENTS
import { H2, Paragraph } from "components/Typography";
// STYLED COMPONENTS
import { StyledWrapper } from "./styles";

// ==============================================================
interface Props extends PropsWithChildren {
  title: string;
  description: string;
}
// ==============================================================

export default function BannerTwo({ children, title, description }: Props) {
  return (
    <StyledWrapper>
      <Link href="#">
        {children}

        <div className="text-content">
          <H2 fontSize={{ sm: 21, xs: 24 }}>{title}</H2>
          <Paragraph fontSize={{ sm: 19, xs: 21 }}>{description}</Paragraph>
        </div>
      </Link>
    </StyledWrapper>
  );
}

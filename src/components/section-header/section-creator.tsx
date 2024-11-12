import { ReactNode } from "react";
import Container from "@mui/material/Container";
import Box, { BoxProps } from "@mui/material/Box";
import SectionHeader from "./section-header";

// ==============================================================
interface Props extends BoxProps {
  title?: string;
  icon?: ReactNode;
  seeMoreLink?: string;
}
// ==============================================================

export default function SectionCreator(props: Props) {
  const { icon, title, children, seeMoreLink, ...others } = props;

  return (
    <Box mb={7.5} {...others}>
      <Container className="pb-1">
        {title ? <SectionHeader title={title} seeMoreLink={seeMoreLink} icon={icon} /> : null}

        {children}
      </Container>
    </Box>
  );
}

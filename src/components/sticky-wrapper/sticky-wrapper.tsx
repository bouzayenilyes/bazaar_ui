import { PropsWithChildren, ReactNode } from "react";
import Container from "@mui/material/Container";
// STYLED COMPONENTS
import { ContentWrapper } from "./styles";

// ==============================================================
interface Props extends PropsWithChildren {
  SideNav: ReactNode;
}
// ==============================================================

export default function StickyWrapper({ SideNav, children }: Props) {
  return (
    <Container>
      <ContentWrapper>
        <div className="sidebar">{SideNav}</div>
        <div className="content">{children}</div>
      </ContentWrapper>
    </Container>
  );
}

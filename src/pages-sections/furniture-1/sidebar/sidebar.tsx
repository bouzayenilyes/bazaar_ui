"use client";

import { useEffect, useRef, useState } from "react";
// Local CUSTOM COMPONENT
import Section2 from "../section-2";
// GLOBAL CUSTOM COMPONENT
import SideNavbar from "components/page-sidenav/side-navbar";
// CUSTOM DATA MODEL
import CategoryNavList from "models/CategoryNavList.model";
// STYLED COMPONENT
import { StyledContainer } from "./styles";

// ==============================================================
type Props = { navList: CategoryNavList[] };
// ==============================================================

export default function Sidebar({ navList }: Props) {
  const ref = useRef<HTMLDivElement>();
  const [sidebarHeight, setSidebarHeight] = useState(0);

  useEffect(() => {
    if (ref.current) setSidebarHeight(ref.current.offsetHeight);
  }, []);

  return (
    <StyledContainer>
      {/* LEFT SIDEBAR */}
      <div className="sidenav">
        <SideNavbar
          lineStyle="dash"
          navList={navList}
          sidebarStyle="colored"
          sidebarHeight={sidebarHeight || "85vh"}
        />
      </div>

      {/* OFFER BANNERS */}
      <div className="pageContent" ref={ref}>
        <Section2 />
      </div>
    </StyledContainer>
  );
}

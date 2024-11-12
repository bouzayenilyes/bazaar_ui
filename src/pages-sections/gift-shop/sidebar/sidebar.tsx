"use client";

import { PropsWithChildren, useEffect, useRef, useState } from "react";
// GLOBAL CUSTOM COMPONENTS
import SideNavbar from "components/page-sidenav/side-navbar";
// STYLED COMPONENT
import { SidebarContainer } from "./styles";
// CUSTOM DATA MODEL
import CategoryNavList from "models/CategoryNavList.model";

// ==============================================================
interface Props extends PropsWithChildren {
  navList: CategoryNavList[];
}
// ==============================================================

export default function Sidebar({ children, navList }: Props) {
  const pageContentRef = useRef<HTMLDivElement>();
  const [sidebarHeight, setSidebarHeight] = useState(0);

  useEffect(() => setSidebarHeight(pageContentRef.current.offsetHeight), []);

  return (
    <SidebarContainer>
      {/* SIDE NAV BAR */}
      <div className="sidenav">
        <SideNavbar
          lineStyle="dash"
          navList={navList}
          sidebarStyle="colored"
          sidebarHeight={sidebarHeight || "85vh"}
        />
      </div>

      <div className="pageContent" ref={pageContentRef}>
        {children}
      </div>
    </SidebarContainer>
  );
}

"use client";

import { usePathname, useRouter } from "next/navigation";
// GLOBAL CUSTOM COMPONENT
import Scrollbar from "components/scrollbar";
// LOCAL CUSTOM COMPONENT
import ButtonContent from "./components/button-content";
import SidebarAccordion from "./components/sidebar-accordion";
// STYLED COMPONENTS
import { NavItemButton } from "./styles";
// CUSTOM DATA MODEL
import { Category } from "models/Common";

// ==============================================================
type Props = { navigation: Category[] };
// ==============================================================

export default function SideNavbarTwo({ navigation }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  // HANDLE ACTIVE CURRENT PAGE
  const activeRoute = (path: string) => (pathname === path ? 1 : 0);

  // HANDLE NAVIGATE TO ANOTHER ROUTE & CLOSE SIDEBAR DRAWER IN MOBILE DEVICE
  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const renderLevels = (data: Category[]) => {
    return data.map((item: Category) => {
      if (item.children) {
        return (
          <SidebarAccordion key={item.name} item={item}>
            {renderLevels(item.children)}
          </SidebarAccordion>
        );
      }

      return (
        <NavItemButton
          disableRipple
          disableTouchRipple
          key={item.name}
          active={activeRoute(item.path)}
          onClick={() => handleNavigation(item.path)}>
          <ButtonContent name={item.name} icon={item.icon} />
        </NavItemButton>
      );
    });
  };

  return (
    <Scrollbar
      autoHide
      clickOnTrack={false}
      sx={{ overflowX: "hidden", height: "calc(100dvh - (120px + 87px))" }}>
      {renderLevels(navigation)}
    </Scrollbar>
  );
}

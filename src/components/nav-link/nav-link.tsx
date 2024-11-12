"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnchorHTMLAttributes, CSSProperties } from "react";
import styled from "@mui/material/styles/styled";
import clsx from "clsx";

// STYLED COMPONENT
const StyledLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== "active"
})<{ active: number }>(({ theme, active }) => ({
  position: "relative",
  transition: "color 150ms ease-in-out",
  color: active ? theme.palette.primary.main : "inherit",
  "&:hover": { color: `${theme.palette.primary.main} !important` }
}));

// ==============================================================
export interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  style?: CSSProperties;
  className?: string;
}
// ==============================================================

export default function NavLink({ href, children, style, className, ...props }: NavLinkProps) {
  const pathname = usePathname();

  // CHECK CURRENT ROUTE
  const checkRouteMatch = () => {
    if (href === "/") return pathname === href;
    return pathname.includes(href);
  };

  return (
    <StyledLink
      href={href}
      style={style}
      className={clsx(className)}
      active={checkRouteMatch() ? 1 : 0}
      {...props}>
      {children}
    </StyledLink>
  );
}

import List from "@mui/material/List";
// GLOBAL CUSTOM COMPONENTS
import { H6 } from "components/Typography";
// STYLED COMPONENTS
import { MenuListItem, StyledNavLink } from "./styles";
// DATA TYPES
import { NavWithChild } from "./types";

// ==============================================================
type Props = { category: NavWithChild };
// ==============================================================

export default function CategoryList({ category }: Props) {
  const { title, child } = category || {};

  return (
    <List>
      <H6 mb={0.5} pl={4}>
        {title}
      </H6>

      {child.map((sub, i) => (
        <StyledNavLink href={sub.url} key={sub.title + i}>
          <MenuListItem>{sub.title}</MenuListItem>
        </StyledNavLink>
      ))}
    </List>
  );
}

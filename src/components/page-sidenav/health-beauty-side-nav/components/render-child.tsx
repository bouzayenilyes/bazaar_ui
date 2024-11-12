import { Span } from "components/Typography";
import { NavLink } from "components/nav-link";
// STYLED COMPONENTS
import { Circle, DotListItem } from "../styles";

// ==============================================================
type Item = { title: string; href: string };
// ==============================================================

// RENDER THE NESTED CHILD
export const renderChild = (childList: Item[]) => {
  return childList.map((item) => (
    <NavLink href={item.href} key={item.title} color="grey.700">
      <DotListItem>
        <Circle className="dot" />
        <Span lineHeight={1}>{item.title}</Span>
      </DotListItem>
    </NavLink>
  ));
};

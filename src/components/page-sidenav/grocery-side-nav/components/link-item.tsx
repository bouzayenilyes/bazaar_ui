// GLOBAL CUSTOM COMPONENTS
import { Span } from "components/Typography";
import { NavLink } from "components/nav-link";

// ==============================================================
interface Props {
  ml: number;
  href: string;
  title: string;
}
// ==============================================================

export default function LinkItem({ href, title, ml = 4 }: Props) {
  return (
    <NavLink href={href} color="grey.700">
      <Span display="block" ml={ml} py={1}>
        {title}
      </Span>
    </NavLink>
  );
}

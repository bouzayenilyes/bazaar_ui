import Link from "next/link";
// GLOBAL CUSTOM COMPONENT
import { Small } from "components/Typography";

// ==============================================================
interface NavLinkProps {
  url: string;
  title: string;
  color?: string;
  borderColor?: string;
}
// ==============================================================

export default function NavLink2({
  url,
  color,
  title = "SHOP NOW",
  borderColor = "primary.600"
}: NavLinkProps) {
  return (
    <Link href={url}>
      <Small fontWeight="700" borderBottom={2} color={color} borderColor={borderColor}>
        {title}
      </Small>
    </Link>
  );
}

import Link from "next/link";
import { ReactNode } from "react";
// MUI ICON COMPONENTS
import { SvgIconComponent } from "@mui/icons-material";
import ChevronRight from "@mui/icons-material/ChevronRight";
// STYLED COMPONENT
import { Wrapper } from "./styles";

// =============================================================
interface Props {
  href: string;
  title: string;
  caret?: boolean;
  render?: ReactNode;
  icon?: SvgIconComponent;
}
// =============================================================

export default function CategoryListItem(props: Props) {
  const { href, title, render, caret = true, icon: Icon } = props;

  return (
    <Wrapper>
      <Link href={href}>
        <div className="category-dropdown-link">
          {Icon ? <Icon fontSize="small" color="inherit" /> : null}
          <span className="title">{title}</span>
          {caret ? <ChevronRight fontSize="small" className="caret-icon" /> : null}
        </div>
      </Link>

      {render ? <div className="mega-menu">{render}</div> : null}
    </Wrapper>
  );
}

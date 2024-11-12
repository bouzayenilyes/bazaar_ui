import { useState } from "react";
import { useRouter } from "next/navigation";
import Avatar from "@mui/material/Avatar";
// MUI ICON COMPONENTS
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import RemoveRedEye from "@mui/icons-material/RemoveRedEye";
// GLOBAL CUSTOM COMPONENT
import BazaarSwitch from "components/BazaarSwitch";
// STYLED COMPONENTS
import { StyledTableRow, CategoryWrapper, StyledTableCell, StyledIconButton } from "../styles";

// ========================================================================
interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  level: number;
  featured: boolean;
}

type Props = { category: Category; selected: string[] };
// ========================================================================

export default function CategoryRow({ category, selected }: Props) {
  const { image, name, level, featured, id, slug } = category || {};

  const router = useRouter();
  const [featuredCategory, setFeaturedCategory] = useState(featured);

  const hasSelected = selected.indexOf(name) !== -1;

  const handleNavigate = () => router.push(`/admin/categories/${slug}`);

  return (
    <StyledTableRow tabIndex={-1} role="checkbox" selected={hasSelected}>
      <StyledTableCell align="left">#{id.split("-")[0]}</StyledTableCell>

      <StyledTableCell align="left">
        <CategoryWrapper>{name}</CategoryWrapper>
      </StyledTableCell>

      <StyledTableCell align="left">
        <Avatar alt={name} src={image} sx={{ borderRadius: 2 }} />
      </StyledTableCell>

      <StyledTableCell align="left">{level}</StyledTableCell>

      <StyledTableCell align="left">
        <BazaarSwitch
          color="info"
          checked={featuredCategory}
          onChange={() => setFeaturedCategory((state: boolean) => !state)}
        />
      </StyledTableCell>

      <StyledTableCell align="center">
        <StyledIconButton onClick={handleNavigate}>
          <Edit />
        </StyledIconButton>

        <StyledIconButton onClick={handleNavigate}>
          <RemoveRedEye />
        </StyledIconButton>

        <StyledIconButton>
          <Delete />
        </StyledIconButton>
      </StyledTableCell>
    </StyledTableRow>
  );
}

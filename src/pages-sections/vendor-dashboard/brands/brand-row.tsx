import { useState } from "react";
import { useRouter } from "next/navigation";
import Avatar from "@mui/material/Avatar";
// MUI ICON COMPONENTS
import Delete from "@mui/icons-material/Delete";
import RemoveRedEye from "@mui/icons-material/RemoveRedEye";
// GLOBAL CUSTOM COMPONENT
import BazaarSwitch from "components/BazaarSwitch";
// STYLED COMPONENTS
import { StyledIconButton, StyledTableCell, StyledTableRow } from "../styles";

// ========================================================================
interface Brand {
  id: string;
  name: string;
  logo: string;
  slug: string;
  featured: boolean;
}

type Props = { brand: Brand; selected: string[] };
// ========================================================================

export default function BrandRow({ brand, selected }: Props) {
  const { name, featured, logo, id, slug } = brand || {};

  const router = useRouter();
  const [featuredCategory, setFeaturedCategory] = useState(featured);
  const hasSelected = selected.indexOf(name) !== -1;

  const handleNavigate = () => router.push(`/admin/categories/${slug}`);

  return (
    <StyledTableRow tabIndex={-1} role="checkbox" selected={hasSelected}>
      <StyledTableCell align="center">#{id.split("-")[0]}</StyledTableCell>

      <StyledTableCell align="center">{name}</StyledTableCell>

      <StyledTableCell align="center">
        <Avatar
          alt={name}
          src={logo}
          sx={{
            width: 55,
            height: "auto",
            margin: "auto",
            borderRadius: 0
          }}
        />
      </StyledTableCell>

      <StyledTableCell align="center">
        <BazaarSwitch
          color="info"
          checked={featuredCategory}
          onChange={() => setFeaturedCategory((state: boolean) => !state)}
        />
      </StyledTableCell>

      <StyledTableCell align="center">
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

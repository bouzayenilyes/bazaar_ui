import Link from "next/link";
// MUI
import Box from "@mui/material/Box";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
// LOCAL CUSTOM COMPONENTS
import ColumnList from "./column-list";
// DATA TYPE
import { CategoryItem, CategoryItemOffer } from "../types";

// =========================================================
interface Props {
  minWidth?: string;
  data: CategoryItem[];
  banner?: CategoryItemOffer;
}
// =========================================================

export default function MegaMenu1({ banner, data }: Props) {
  return (
    <ColumnList list={data} banner={banner}>
      {banner?.position === "bottom" ? (
        <Link href={banner.href}>
          <Box position="relative" height={150} width="100%">
            <LazyImage
              fill
              alt="banner"
              src={banner.url}
              sx={{ objectFit: "cover", objectPosition: "center center" }}
            />
          </Box>
        </Link>
      ) : null}
    </ColumnList>
  );
}

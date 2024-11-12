import Link from "next/link";
import Add from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { Theme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
// GLOBAL CUSTOM COMPONENTS
import { FlexBox } from "components/flex-box";
import SearchInput from "components/SearchInput";

// ===============================================================
interface Props {
  url: string;
  buttonText: string;
  handleSearch: () => void;
  searchPlaceholder: string;
}
// ===============================================================

export default function SearchArea({
  searchPlaceholder = "Search Product...",
  buttonText = "Add Product",
  url = "/"
}: Props) {
  const downSM = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  return (
    <FlexBox mb={2} gap={2} justifyContent="space-between" flexWrap="wrap">
      <SearchInput placeholder={searchPlaceholder} />

      <Button
        href={url}
        color="info"
        fullWidth={downSM}
        variant="contained"
        startIcon={<Add />}
        LinkComponent={Link}
        sx={{ minHeight: 44 }}>
        {buttonText}
      </Button>
    </FlexBox>
  );
}

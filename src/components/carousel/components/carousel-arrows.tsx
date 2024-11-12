import { CustomArrowProps } from "react-slick";
import { SxProps, Theme } from "@mui/material/styles";
// MUI ICON COMPONENTS
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";
// STYLED COMPONENT
import { ArrowButton } from "../styles";

// ==============================================================
interface ArrowProps extends CustomArrowProps {
  sx?: SxProps<Theme>;
}
// ==============================================================

function NextArrow({ onClick, sx, className }: ArrowProps) {
  const updatedClassName = className
    .split(" ")
    .filter((item) => item !== "slick-next")
    .join(" ");

  return (
    <ArrowButton right={0} onClick={onClick} className={`next ${updatedClassName}`} sx={{ ...sx }}>
      <ArrowForward fontSize="small" color="inherit" className="forward-icon" />
    </ArrowButton>
  );
}

function PrevArrow({ onClick, sx, className }: ArrowProps) {
  const updatedClassName = className
    .split(" ")
    .filter((item) => item !== "slick-prev")
    .join(" ");

  return (
    <ArrowButton left={0} onClick={onClick} className={`prev ${updatedClassName}`} sx={{ ...sx }}>
      <ArrowBack fontSize="small" color="inherit" className="back-icon" />
    </ArrowButton>
  );
}

export default function CarouselArrows(sx?: SxProps<Theme>) {
  return {
    nextArrow: <NextArrow sx={sx} />,
    prevArrow: <PrevArrow sx={sx} />
  };
}

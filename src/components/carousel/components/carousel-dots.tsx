import { Fragment, ReactNode } from "react";
import { BoxProps } from "@mui/material/Box";
// STYLED COMPONENTS
import { Dot, DotList } from "../styles";

// ==============================================================
interface Props extends BoxProps {
  dotColor?: string;
}
// ==============================================================

export default function CarouselDots({ dotColor, ...props }: Props) {
  return {
    customPaging: () => <Dot dotColor={dotColor} />,
    appendDots: (dots: ReactNode) => (
      <Fragment>
        <DotList component="ul" {...props}>
          {dots}
        </DotList>
      </Fragment>
    )
  };
}

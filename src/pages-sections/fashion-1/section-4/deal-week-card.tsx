import Image from "next/image";
// STYLED COMPONENTS
import { CardRoot, StyledParagraph, StyledParagraph2 } from "./styles";

// ===========================================================
interface Props {
  off: number;
  title: string;
  imgUrl: string;
}
// ===========================================================

export default function DealWeekCard({ title, imgUrl, off }: Props) {
  return (
    <CardRoot>
      <Image alt={title} width={580} src={imgUrl} height={225} className="banner" />
      <StyledParagraph>{title}</StyledParagraph>
      <StyledParagraph2>{off}% OFF</StyledParagraph2>
    </CardRoot>
  );
}

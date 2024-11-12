import Link from "next/link";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { H3, Paragraph, Small } from "components/Typography";
// STYLED COMPONENT
import { Wrapper } from "./styles";

// =====================================================
interface Props {
  body: string;
  title: string;
  color?: string;
  imgUrl: string;
  bgColor?: string;
}
// =====================================================

export default function Card3({ body, title, color, imgUrl, bgColor = "white" }: Props) {
  return (
    <Link href="/sales-1">
      <Wrapper bgcolor={bgColor} color={color} pr={0} height="100%">
        <div className="content">
          <H3 lineHeight={1.3}>{title}</H3>
          <Paragraph color={color ? color : "grey.600"} mt={1} mb={2}>
            {body}
          </Paragraph>

          <Small fontWeight="700" borderBottom={2}>
            SHOP NOW
          </Small>
        </div>

        <div className="img-wrapper">
          <LazyImage width={260} src={imgUrl} height={249} alt="apple-watch-1" />
        </div>
      </Wrapper>
    </Link>
  );
}

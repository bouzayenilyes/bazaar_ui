import Link from "next/link";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { NavLink3 } from "components/nav-link";
import { H4, Paragraph } from "components/Typography";
// STYLED COMPONENTS
import { RootStyle, ImageBox, DateBox } from "./styles";

// =====================================================
interface Props {
  date: string;
  image: string;
  title: string;
  description: string;
}
// =====================================================

export default function BlogCard({ image, title, date, description }: Props) {
  return (
    <RootStyle>
      <ImageBox>
        <LazyImage width={580} height={272} src={image} alt="blog-1" />

        <DateBox>
          <Paragraph width="min-content" lineHeight={1} fontWeight={600}>
            {date}
          </Paragraph>
        </DateBox>
      </ImageBox>

      <div className="content">
        <Link href="/">
          <H4 fontWeight={700}>{title}</H4>
        </Link>

        <Paragraph mt={0.5} mb={3}>
          {description}
        </Paragraph>

        <NavLink3 text="Read More" href="/" />
      </div>
    </RootStyle>
  );
}

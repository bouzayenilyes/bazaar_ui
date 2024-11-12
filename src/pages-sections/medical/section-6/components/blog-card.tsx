import Link from "next/link";
import { format } from "date-fns";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { H3, Paragraph } from "components/Typography";
// STYLED COMPONENTS
import { BlogCardWrapper } from "../styles";

// ==============================================================
interface Props {
  date: string;
  image: string;
  title: string;
}
// ==============================================================

export default async function BlogCard({ date, image, title }: Props) {
  return (
    <BlogCardWrapper>
      <div className="img-wrapper">
        <LazyImage src={image} width={379} height={246} alt={title} />
      </div>

      <div>
        <Paragraph color="grey.600" mb={1.5}>
          {format(new Date(date), "dd MMMM, yyyy")}
        </Paragraph>

        <Link href="#">
          <H3 fontSize={{ xl: 20, xs: 18 }} maxWidth={{ xl: 250, xs: 220 }}>
            {title}
          </H3>
        </Link>
      </div>
    </BlogCardWrapper>
  );
}

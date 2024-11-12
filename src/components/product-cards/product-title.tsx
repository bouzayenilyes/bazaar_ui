import Link from "next/link";
import { H3 } from "components/Typography";

// ==============================================================
type Props = { title: string; slug: string };
// ==============================================================

export default function ProductTitle({ title, slug }: Props) {
  return (
    <Link href={`/products/${slug}`}>
      <H3
        mb={1}
        ellipsis
        title={title}
        fontSize={14}
        fontWeight={600}
        className="title"
        color="text.secondary">
        {title}
      </H3>
    </Link>
  );
}

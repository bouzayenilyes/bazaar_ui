import LazyImage from "components/LazyImage";
// GLOBAL CUSTOM COMPONENTS
import { FlexBox } from "components/flex-box";
import { H6, Paragraph } from "components/Typography";
// STYLED COMPONENTS
import { ImageWrapper, Wrapper } from "./styles";

// ==============================================================
interface Testimonial {
  id: string;
  comment: string;
  user: { name: string; avatar: string; designation: string };
}

type Props = { testimonial: Testimonial };
// ==============================================================

export default function TestimonialCard({ testimonial }: Props) {
  const { comment, user } = testimonial || {};

  return (
    <Wrapper>
      <FlexBox mb={2} gap={2}>
        <ImageWrapper>
          <LazyImage src={user.avatar} width={240} height={240} alt="User" />
        </ImageWrapper>

        <div>
          <H6 fontSize={18}>{user.name}</H6>
          <Paragraph color="grey.600">{user.designation}</Paragraph>
        </div>
      </FlexBox>

      <Paragraph>{comment}</Paragraph>
    </Wrapper>
  );
}

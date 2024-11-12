"use client";

import { useRef } from "react";
import Slider from "react-slick";
import IconButton from "@mui/material/IconButton";
// MUI ICON COMPONENTS
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { Carousel } from "components/carousel";
import { H3, H6, Paragraph } from "components/Typography";
// CUSTOM ICON COMPONENT
import Quote from "icons/Quote";
// STYLED COMPONENTS
import { TestimonialCard, TestimonialRootStyle } from "../styles";

// ==============================================================
type Props = { testimonials: any[] };
// ==============================================================

export default function TestimonialCarousel({ testimonials }: Props) {
  const carouselRef = useRef<Slider>();

  const handlePrev = () => carouselRef.current?.slickPrev();
  const handleNext = () => carouselRef.current?.slickNext();

  return (
    <TestimonialRootStyle>
      <div className="wrapper">
        <Quote className="icon" />

        <Carousel ref={carouselRef} slidesToShow={1} arrows={false}>
          {testimonials.map(({ title, id, user, comment }) => (
            <TestimonialCard key={id}>
              <H3 fontSize={18} pt={3}>
                {title}
              </H3>

              <Paragraph mt={2} fontSize={16} lineHeight={1.7}>
                {comment}
              </Paragraph>

              <div className="user-info">
                <div className="user-img-wrapper">
                  <LazyImage alt="user" width={240} height={240} src={user.avatar} />
                </div>

                <div>
                  <H6 fontSize={18}>{user.name}</H6>
                  <Paragraph color="grey.600">{user.designation}</Paragraph>
                </div>
              </div>
            </TestimonialCard>
          ))}
        </Carousel>

        <div className="btn-wrapper">
          <IconButton onClick={handlePrev}>
            <ArrowBack fontSize="small" />
          </IconButton>

          <IconButton onClick={handleNext} className="right-arrow">
            <ArrowForward fontSize="small" />
          </IconButton>
        </div>
      </div>
    </TestimonialRootStyle>
  );
}

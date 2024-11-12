"use client";

import { useRef } from "react";
import Slider from "react-slick";

export default function useCarousel() {
  const carouselRef = useRef<Slider>();

  // CAROUSEL RESPONSIVE OBJECTS
  const responsive = [
    { breakpoint: 950, settings: { slidesToShow: 3 } },
    { breakpoint: 650, settings: { slidesToShow: 2 } },
    { breakpoint: 500, settings: { slidesToShow: 1 } }
  ];

  const handlePrev = () => carouselRef.current?.slickPrev();
  const handleNext = () => carouselRef.current?.slickNext();

  return { carouselRef, responsive, handlePrev, handleNext };
}

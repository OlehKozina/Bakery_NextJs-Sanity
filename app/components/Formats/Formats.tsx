"use client";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FormatType } from "@/types";
import Format from "./Format";
import Heading from "../Heading";
import { ArrowButton } from "../Slider";

export default function Formats({ formats }: { formats?: FormatType }) {
  if (!formats) return null;
  const { bakeryTypes, heading } = formats;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    skipSnaps: false,
    align: "start",
    loop: true,
  });
  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="py-5 md:py-12" id="formats">
      <div className="container mx-auto px-0">
        <Heading heading={heading} className="mb-6 text-center md:mb-10" />
        <div className="relative max-w-[21rem] sm:max-w-[42rem] md:max-w-[69rem] mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {bakeryTypes.map((type) => {
                const { _key, content, image, name } = type;
                return (
                  <div
                    key={_key}
                    className="flex-[0_0_100%] sm:flex-[0_0_50%] flex sm:justify-between md:flex-[0_0_33.3333%] px-2"
                  >
                    <Format {...{ content, image, name }} />
                  </div>
                );
              })}
            </div>
          </div>
          <ArrowButton direction="left" onClick={scrollPrev} />
          <ArrowButton direction="right" onClick={scrollNext} />
        </div>
      </div>
    </section>
  );
}

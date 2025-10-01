"use client";
import React, { useEffect, useState } from "react";
import { FormatType } from "@/types";
import Format from "./Format";
import Heading from "../Heading";
import { ArrowButton } from "../Slider";

export default function Formats({ formats }: { formats?: FormatType }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(1);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setSlidesPerPage(3);
      else if (window.innerWidth >= 640) setSlidesPerPage(2);
      else setSlidesPerPage(1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  if (!formats) return null;
  const { bakeryTypes, heading } = formats;
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + slidesPerPage >= bakeryTypes.length
        ? 0
        : prevIndex + slidesPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? bakeryTypes.length - slidesPerPage
        : prevIndex - slidesPerPage
    );
  };

  return (
    <section className="py-5 md:py-12" id="formats">
      <div className="container mx-auto px-0">
        <Heading heading={heading} className="mb-6 text-center md:mb-10" />
        <div className="mx-auto max-w-[69rem] relative">
          <div className=" relative w-full mx-auto max-w-[69rem] overflow-hidden">
            <div
              className=" flex transition-transform duration-300"
              style={{
                transform: `translateX(-${currentIndex * (100 / slidesPerPage)}%)`,
              }}
            >
              {bakeryTypes.map((type) => {
                const { _key, content, image, name } = type;
                return <Format key={_key} {...{ content, image, name }} />;
              })}
            </div>
          </div>
          <ArrowButton direction="left" onClick={prevSlide} />
          <ArrowButton direction="right" onClick={nextSlide} />
        </div>
      </div>
    </section>
  );
}

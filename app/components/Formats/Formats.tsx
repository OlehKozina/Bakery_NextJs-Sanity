"use client";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { FormatType } from "@/types";
import Format from "./Format";

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
        <h1 className="mb-6 text-2xl font-extrabold text-center md:mb-10 md:text-5xl">
          {heading}
        </h1>
        <div className=" relative w-full max-w-[69rem] mx-auto overflow-hidden">
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
          <button
            onClick={prevSlide}
            className="absolute bg-white rounded-full h-8 w-8 top-1/2 left-0 transform -translate-y-1/2 p-2 z-5"
          >
            <FontAwesomeIcon icon={faAngleLeft} className="text-base" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute bg-white rounded-full h-8 w-8 top-1/2 right-0 transform -translate-y-1/2 p-2 z-5"
          >
            <FontAwesomeIcon icon={faAngleRight} className="text-base" />
          </button>
        </div>
      </div>
    </section>
  );
}

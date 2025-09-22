import React, { useEffect, useState } from "react";
import { getFormats } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

interface Format {
  _id: string;
  name: string;
  image: string;
  content: any;
}

export default function Formats() {
  const [formats, setFormats] = useState<Format[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const formatsData = await getFormats();
      setFormats(formatsData);
    };
    fetchData();
  }, []);

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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + slidesPerPage >= formats.length
        ? 0
        : prevIndex + slidesPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? formats.length - slidesPerPage
        : prevIndex - slidesPerPage
    );
  };

  return (
    <section className="py-5 md:py-12" id="formats">
      <div className="container mx-auto px-0">
        <h1 className="mb-6 text-2xl font-extrabold text-center md:mb-10 md:text-5xl">
          Formats
        </h1>
        <div className=" relative w-full max-w-[69rem] mx-auto overflow-hidden">
          <div
            className=" flex transition-transform duration-300"
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesPerPage)}%)`,
            }}
          >
            {formats.map((format) => (
              <div
                key={format._id}
                className="flex-shrink-0 w-full max-w-[15rem] sm:max-w-[22rem] sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] text-white font-medium relative mt-8 mb-2 mx-2"
              >
                <div className="relative w-full h-full rounded-3xl overflow-hidden">
                  <Image
                    src={format.image}
                    alt={format.name}
                    layout="responsive"
                    width={349}
                    height={444}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 z-9 bg-gradient-to-b from-white/0 via-white/0 to-brand-dark"></div>
                  <div className="absolute top-[9.5rem] left-8 z-10 text-xl lg:text-2xl md:top-[8rem] lg:top-[10rem]">
                    {format.name}
                  </div>
                  <div className="absolute  left-8 z-10 text-[0.6rem] max-w-[19rem] top-[12.5rem] sm:text-xs md:text-[0.6rem] md:top-[10rem] lg:text-sm lg:top-[14rem]">
                    <PortableText value={format.content} />
                  </div>
                </div>
              </div>
            ))}
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

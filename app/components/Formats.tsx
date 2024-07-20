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
  content: any; // Adjust based on your content structure
}

export default function Formats() {
  const [formats, setFormats] = useState<Format[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(1); // Default value

  useEffect(() => {
    const fetchData = async () => {
      const formatsData = await getFormats();
      setFormats(formatsData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768)
        setSlidesPerPage(2); // Medium screens and up
      else if (window.innerWidth >= 640)
        setSlidesPerPage(1); // Small screens
      else setSlidesPerPage(1); // Default for very small screens
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + slidesPerPage < formats.length ? prevIndex + slidesPerPage : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(formats.length - slidesPerPage, 0)
        : prevIndex - slidesPerPage
    );
  };

  return (
    <section className="py-5 md:py-12" id="formats">
      <div className="container mx-auto">
        <h1 className="mb-6 text-black text-2xl font-extrabold text-center md:mb-10 md:text-5xl">
          Formats
        </h1>
        <div className="relative w-full max-w-[1100px] mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-300 relative"
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesPerPage)}%)`,
            }}
          >
            {formats.map((format) => (
              <div
                key={format._id}
                className="flex-shrink-0 w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] text-custom-white font-medium relative text-2xl mt-8 mb-2 mx-2"
              >
                <div className="relative z-10 top-[190px] left-8">
                  {format.name}
                </div>
                <div className="relative rounded-3xl overflow-hidden w-full h-auto">
                  <Image
                    src={format.image}
                    alt={format.name}
                    layout="responsive"
                    width={349}
                    height={444}
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0 z-9"
                    style={{
                      backgroundImage:
                        "linear-gradient(180deg, rgba(49, 38, 26, 0) 55.21%, rgba(49, 38, 26, 0.71) 72.92%, #31261a 100%)",
                    }}
                  ></div>
                </div>
                <div className="text-sm absolute z-9 top-[240px] left-8 max-w-[300px]">
                  <PortableText value={format.content} />
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute bg-custom-white rounded-full h-8 w-8 top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-2 z-9"
          >
            <FontAwesomeIcon icon={faAngleLeft} className="text-[16px]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute bg-custom-white rounded-full h-8 w-8 top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-2 z-9"
          >
            <FontAwesomeIcon icon={faAngleRight} className="text-[16px]" />
          </button>
        </div>
      </div>
    </section>
  );
}

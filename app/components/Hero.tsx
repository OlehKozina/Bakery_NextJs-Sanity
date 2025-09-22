"use client";
import Form from "./Form";
import React, { useState } from "react";
import { getHero } from "@/sanity/sanity-utils";
import useSWR from "swr";

interface HeroProps {
  heading?: string;
  image?: string;
}

const fetcher = async () => {
  const data = await getHero();
  return data;
};

const Hero = ({ heading, image }: HeroProps) => {
  const { data } = useSWR("hero", fetcher);
  const hero = data?.[0];
  console.log("hero", hero);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const openForm = () => setIsFormVisible(true);
  const closeForm = () => setIsFormVisible(false);

  return (
    <section
      className="relative h-[21rem] md:h-[33.5rem] lg:h-[46rem] flex items-center bg-cover bg-top"
      style={{
        backgroundImage: `url(${hero?.image})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/0"></div>
      <div className="container">
        <h1 className="relative font-extrabold text-center text-5xl mb-25 leading-tight text-brand-light md:top-0 md:mb-12 md:text-8xl lg:text-9xl lg:line-height-[1.5] lg:mb-0">
          <span className="text-brand-default">
            {hero?.heading.split(" ")[0]}{" "}
          </span>
          {hero?.heading.split(" ").slice(1).join(" ")}
        </h1>
        <button
          className="md:hidden mx-auto block px-4 py-2 bg-brand-default text-brand-light border border-brand-default rounded-lg cursor-pointer font-semibold md:px-8 md:py-4"
          type="button"
          onClick={openForm}
        >
          Request a call
        </button>
        {isFormVisible && <Form onClose={closeForm} />}
      </div>
    </section>
  );
};

export default Hero;

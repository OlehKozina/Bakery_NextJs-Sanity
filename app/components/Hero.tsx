"use client";
import ModalForm from "./ModalForm";
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
      className="relative flex items-center bg-cover bg-top py-[10rem] lg:py-[20rem]"
      style={{
        backgroundImage: `url(${hero?.image})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/0"></div>
      <div className="container flex flex-col gap-5">
        <h1 className="relative font-extrabold text-center text-5xl mb-25 leading-tight text-brand-light md:top-0 md:mb-12 md:text-8xl lg:text-9xl lg:line-height-[1.5] lg:mb-0">
          <span className="text-brand-default">
            {hero?.heading.split(" ")[0]}{" "}
          </span>
          {hero?.heading.split(" ").slice(1).join(" ")}
        </h1>
        <button
          className="md:hidden mx-auto block px-4 py-2 bg-brand-default text-brand-light border border-brand-default rounded-lg cursor-pointer font-semibold md:px-8 md:py-4 z-1 relative"
          type="button"
          onClick={openForm}
        >
          Request a call
        </button>
        {isFormVisible && <ModalForm onClose={closeForm} />}
      </div>
    </section>
  );
};

export default Hero;

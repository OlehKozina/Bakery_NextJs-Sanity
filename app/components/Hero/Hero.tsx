"use client";
import React, { useState } from "react";
import { HeroType } from "@/types/Hero";
import { ModalForm } from "../Form";
import { FormType } from "@/types";
import { PortableTextBlock } from "next-sanity";
import { motion } from "framer-motion";

const Hero = ({
  hero,
  form,
  privacyPolicy,
}: {
  hero: HeroType;
  form?: FormType;
  privacyPolicy?: PortableTextBlock;
}) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const openForm = () => setIsFormVisible(true);
  const closeForm = () => setIsFormVisible(false);
  if (!hero) return null;
  const { heading, image } = hero;

  const words = heading.split(" ");
  const firstWord = words[0];
  const fullText = heading.split("");
  const containerVariants = {
    animate: {
      transition: { staggerChildren: 0.03 },
    },
  };

  const charVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.2 } },
  };

  return (
    <section
      className="relative flex items-center bg-cover bg-top py-[10rem] lg:py-[20rem] max-md:-mt-20"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/0" />
      <div className="container flex flex-col gap-5">
        {heading && (
          <motion.h1
            initial="initial"
            animate="animate"
            variants={containerVariants}
            className="relative font-extrabold text-center text-5xl mb-25 leading-tight text-brand-light md:top-0 md:mb-12 md:text-8xl lg:text-9xl lg:line-height-[1.5] lg:mb-0"
          >
            {fullText.map((char, index) => {
              const isFirstWordChar = index < firstWord.length;
              return (
                <motion.span
                  key={index}
                  variants={charVariants}
                  className={isFirstWordChar ? "text-brand-default" : ""}
                >
                  {char}
                </motion.span>
              );
            })}
          </motion.h1>
        )}
        <button
          className="md:hidden mx-auto block px-4 py-2 bg-brand-default text-brand-light border border-brand-default rounded-lg cursor-pointer font-semibold md:px-8 md:py-4 z-1 relative"
          type="button"
          onClick={openForm}
        >
          Request a call
        </button>
        <ModalForm
          onClose={closeForm}
          isVisible={isFormVisible}
          form={form}
          privacyPolicy={privacyPolicy}
        />
      </div>
    </section>
  );
};

export default Hero;

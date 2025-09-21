"use client";
import Form from "./Form";
import React, { useState } from "react";

function Hero() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const openForm = () => setIsFormVisible(true);
  const closeForm = () => setIsFormVisible(false);

  const [isMobMenuVisible, setIsMobMenuVisible] = useState(false);
  const openMenu = () => setIsMobMenuVisible(true);
  const closeMenu = () => setIsMobMenuVisible(false);

  return (
    <section
      className="relative h-[21rem] md:h-[33.5rem] lg:h-[46rem] flex items-center bg-center-top bg-cover bg-no-repeat bg-top"
      style={{
        backgroundImage:
          "linear-gradient(103deg, rgba(18, 18, 17, 0.78) 2.03%, rgba(18, 18, 17, 0.6) 58.46%, rgba(18, 18, 17, 0) 90.36%), url('/hero-section-pic.jpg')",
      }}
    >
      <div className="container">
        <h1 className="relative font-extrabold text-center text-[3rem] mb-25 leading-tight text-brand-light md:top-0 md:mb-12 md:text-[6.5rem] lg:text-[8rem] lg:line-height-[1.5] lg:mb-0">
          <span className="text-brand-default">Modern </span>Bakery
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
}

export default Hero;

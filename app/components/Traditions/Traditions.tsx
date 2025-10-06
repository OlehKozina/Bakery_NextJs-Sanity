"use client";
import { PortableText } from "@portabletext/react";
import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { m } from "framer-motion";
import { ItemType } from "@/types";
import Heading from "../Heading";
import Icons, { Flour } from "../Icons";

function Traditions({ traditions }: { traditions?: ItemType }) {
  if (!traditions) return null;
  const { content, heading, image } = traditions;
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <section
      className="py-10 md:py-24 text-sm md:text-base relative overflow-hidden max-md:scroll-mt-16"
      id="traditions"
      ref={ref}
    >
      <Flour className="left-0 top-0 max-md:w-[20rem]" />
      <Icons
        icons={[
          { name: "bread2", position: "top-left" },
          { name: "basket", position: "top-right" },
          { name: "loaf", position: "bottom-left" },
          { name: "baguette", position: "bottom-right" },
        ]}
      />
      <div className="container relative">
        <div className="flex flex-col md:flex-row items-start max-md:items-center justify-center gap-10 md:gap-0 md:space-x-10 text-base md:text-xl">
          <div className="max-w-[43rem]">
            <Heading
              heading={heading}
              className="mb-6 mx-auto text-center md:mb-10"
            />
            <div className="mb-5">
              <PortableText value={content} />
            </div>
          </div>
          <m.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden md:block"
          >
            <Image
              src={image}
              alt="baker"
              width={393}
              height={466}
              className="rounded-t-full"
            />
          </m.div>

          {/* mobile image */}
          <m.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="block md:hidden"
          >
            <Image
              src="/bakery-horizontal.jpg"
              alt="baker"
              width={566}
              height={393}
              className="rounded-3xl"
            />
          </m.div>
        </div>
      </div>
    </section>
  );
}

export default Traditions;

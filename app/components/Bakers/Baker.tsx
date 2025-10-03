"use client";
import React from "react";
import Image from "next/image";
import { PortableText, PortableTextBlock } from "@portabletext/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface BakerType {
  _key?: string;
  image?: string;
  content?: PortableTextBlock[];
  name?: string;
}

const Baker = ({ image, content, name }: BakerType) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  React.useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [controls, inView]);

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="mb-4 text-brand-dark text-2xl font-bold md:text-4xl">
      <div className="flex gap-4 list-none items-start">
        {image && (
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={imageVariants}
          >
            <Image
              src={image}
              alt={name || "Baker"}
              width={240}
              height={388}
              className="list-none w-[9rem] rounded-md rounded-bl-[12.5rem] shadow-bakerCard md:w-[15rem]"
            />
          </motion.div>
        )}
        <div>
          {name || ""}
          {content && (
            <div className="max-w-[12rem] mt-6 mb-6 text-sm font-thin last:mb-0 md:text-xl md:max-w-[21rem]">
              <PortableText value={content || []} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Baker;

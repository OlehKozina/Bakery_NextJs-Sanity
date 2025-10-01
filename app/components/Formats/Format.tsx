import React from "react";
import Image from "next/image";
import { PortableTextBlock } from "next-sanity";
import { PortableText } from "next-sanity";

const Format = ({
  image,
  content,
  name,
}: {
  image?: string;
  content?: PortableTextBlock[];
  name?: string;
}) => {
  return (
    <div className="cursor-pointer flex-shrink-0 w-full max-w-[15rem] group md:max-w-[22rem] sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] text-white font-medium relative mt-8 mb-4 mx-2 hover:scale-105 transition-transform h-full">
      <div className="relative w-full h-full rounded-3xl overflow-hidden">
        {image && (
          <Image
            src={image}
            alt={name || ""}
            layout="responsive"
            width={349}
            height={444}
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 z-9 bg-gradient-to-b from-white/0 via-white/0 to-brand-dark group-hover:to-black/90 transition-all" />
        <div className="absolute top-[9.5rem] left-8 z-10 text-xl lg:text-2xl md:top-[8rem] lg:top-[10rem]">
          {name}
        </div>
        <div className="absolute left-8 z-10 text-[0.6rem] max-w-[19rem] top-[12.5rem] sm:text-xs md:text-[0.6rem] md:text-sm lg:top-[14rem]">
          {content && <PortableText value={content} />}
        </div>
      </div>
    </div>
  );
};

export default Format;

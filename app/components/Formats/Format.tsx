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
    <div className="cursor-pointer flex-shrink-0 w-full max-w-[15rem] group md:max-w-[22rem] sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] text-white font-medium relative mt-8 mb-4 mx-2 hover:scale-105 transition-transform h-full aspect-[349/444]">
      <div className="relative w-full h-full rounded-3xl overflow-hidden p-10">
        {image && (
          <Image
            src={image}
            alt={name || ""}
            layout="responsive"
            width={349}
            height={444}
            className="absolute inset-0"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-brand-dark group-hover:to-black/90 transition-all" />
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-6 p-10">
          <div className="relative text-xl md:text-2xl">{name}</div>
          <div className="relative max-w-[19rem] text-xs md:text-sm">
            {content && <PortableText value={content} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Format;

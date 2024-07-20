import React from "react";
import Image from "next/image";
import { getBakers } from "@/sanity/sanity-utils";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";

const myPortableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <p className="flex justify-center">{value.imageUrl}</p>
    ),

    callToAction: ({ value, isInline }) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
  },

  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      );
    },
  },
};

export default async function Bakers() {
  const bakers = await getBakers();

  return (
    <section className="py-5 md:py-12" id="cooks">
      <div className="container">
        <h2 className="text-black block text-[32px] font-extrabold leading-tight mx-auto text-center mb-6 max-w-[520px] relative before-desktop after-desktop md:text-[64px] md:mb-20">
          Our best <span className="text-brand-color">bakers</span>
        </h2>
        <div className="list-none justify-center flex gap-[30px] flex-wrap sm:justify-center ">
          {bakers.map((baker) => (
            <div
              key={baker._id}
              className="mb-4 text-color-primarydark text-2xl font-bold md:text-[40px]"
            >
              <div className="flex gap-4 list-none items-start">
                <Image
                  src={baker.image}
                  alt={baker.name}
                  width={240}
                  height={388}
                  className="ist-none w-[140px] rounded-[4px] rounded-bl-[200px] shadow-custom md:w-[240px]"
                />
                <div>
                  {baker.name}
                  <div className="max-w-[187px] mt-6 mb-6 text-sm font-thin last:mb-0 md:text-xl md:max-w-[334px]">
                    <PortableText
                      value={baker.content}
                      components={myPortableTextComponents}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

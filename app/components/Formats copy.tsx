import React from "react";
import { getFormats } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
import Image from "next/image";

export default async function Formats() {
  const formats = await getFormats();
  return (
    <section className="py-5 md:py-12" id="formats">
      <div className="container">
        <h1 className="mb-6 text-black text-[32px] font-extrabold leading-tight mx-auto text-center md:mb-10 md:text-[64px]">
          Formats
        </h1>
        <div className="flex justify-between relative w-full max-w-[1100px] m-0 md:mx-[50px] md:mb-[50px]">
          {" "}
          {formats.map((format) => (
            <div
              key={format._id}
              className="text-custom-white font-medium relative text-[1.56rem] mt-[30px] mb-[5px]"
            >
              <div className="absolute z-[9] top-[190px] left-6">
                {format.name}
              </div>
              {""}
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src={format.image}
                  alt={format.name}
                  width={349}
                  height={444}
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(49,38,26,0.71)] to-[#31261a] z-9"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(49, 38, 26, 0) 55.21%, rgba(49, 38, 26, 0.71) 72.92%, #31261a 100%)",
                  }}
                ></div>
              </div>

              <div className="text-sm absolute z-9 top-[240px] left-6 max-w-[300px]">
                {" "}
                <PortableText value={format.content} />
              </div>

              {""}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

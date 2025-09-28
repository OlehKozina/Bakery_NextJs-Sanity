import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";
import { BakersType } from "@/types";

export default function Bakers({
  bakers: bakersData,
}: {
  bakers?: BakersType;
}) {
  if (!bakersData) return <p>No bakers found</p>;
  const { bakers, heading } = bakersData;

  return (
    <section className="py-5 md:py-12" id="bakers">
      <div className="container">
        {heading && (
          <h2 className="block text-3xl font-extrabold leading-tight mx-auto text-center mb-6 max-w-[32.5rem] relative md:text-6xl md:mb-20">
            {heading.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-brand-default">
              {heading.split(" ").pop()}
            </span>
          </h2>
        )}
        <div className="list-none justify-center flex gap-8 flex-wrap sm:justify-center">
          {!!bakers?.length &&
            bakers.map((baker) => (
              <div
                key={baker?._key}
                className="mb-4 text-brand-dark text-2xl font-bold md:text-4xl"
              >
                <div className="flex gap-4 list-none items-start">
                  <Image
                    src={baker?.image || ""}
                    alt={baker?.name || "Baker"}
                    width={240}
                    height={388}
                    className="list-none w-[9rem] rounded-md rounded-bl-[12.5rem] shadow-bakerCard md:w-[15rem]"
                  />
                  <div>
                    {baker.name}
                    <div className="max-w-[12rem] mt-6 mb-6 text-sm font-thin last:mb-0 md:text-xl md:max-w-[21rem]">
                      <PortableText value={baker?.content || []} />
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

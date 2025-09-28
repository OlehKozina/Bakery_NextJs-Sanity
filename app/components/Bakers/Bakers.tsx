import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";
import { BakersType } from "@/types";
import Baker from "./Baker";

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
            bakers.map((baker) => {
              const { _key, name, content, image } = baker;
              return <Baker key={_key} {...{ name, content, image }} />;
            })}
        </div>
      </div>
    </section>
  );
}

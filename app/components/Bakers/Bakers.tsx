import React from "react";
import { BakersType } from "@/types";
import Baker from "./Baker";
import Heading from "../Heading";
import Icons, { Flour } from "../Icons";

export default function Bakers({
  bakers: bakersData,
}: {
  bakers?: BakersType;
}) {
  if (!bakersData) return <p>No bakers found</p>;
  const { bakers, heading } = bakersData;

  return (
    <section className="py-5 md:py-12 relative overflow-hidden" id="bakers">
      <Flour className="left-1/3" />
      <Icons />
      <div className="container">
        {heading && (
          <Heading
            heading={heading}
            className="block mx-auto text-center mb-6 max-w-[32.5rem] relative md:mb-20"
          />
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

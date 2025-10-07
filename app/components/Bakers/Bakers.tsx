import React from "react";
import { BakersType } from "@/types";
import Baker from "./Baker";
import Heading from "../Heading";
import Icons from "../Icons";

export default function Bakers({
  bakers: bakersData,
}: {
  bakers?: BakersType;
}) {
  if (!bakersData) return <p>No bakers found</p>;
  const { bakers, heading } = bakersData;

  return (
    <section
      className="py-5 md:py-12 relative overflow-hidden max-md:scroll-mt-16"
      id="bakers"
    >
      <Icons
        icons={[
          { name: "bread1", position: "top-left" },
          { name: "donut", position: "top-right" },
          { name: "muffin", position: "bottom-left" },
          { name: "loaf", position: "bottom-right" },
        ]}
      />
      <div className="container">
        {heading && (
          <Heading
            heading={heading}
            className="block mx-auto text-center mb-6 relative md:mb-20 whitespace-pre-line"
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

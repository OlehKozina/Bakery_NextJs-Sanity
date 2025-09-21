import React from "react";
import Image from "next/image";
import useSWR from "swr";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { getBakers } from "@/sanity/sanity-utils";

const fetcher = async () => {
  const data = await getBakers();
  return data;
};

export default function Bakers() {
  const { data: bakers, error } = useSWR("bakers", fetcher);
  if (!bakers) return <p>Loading...</p>;

  if (error) return <p>Error loading bakers</p>;

  return (
    <section className="py-5 md:py-12" id="cooks">
      <div className="container">
        <h2 className="block text-3xl font-extrabold leading-tight mx-auto text-center mb-6 max-w-[32.5rem] relative before-desktop after-desktop md:text-6xl md:mb-20">
          Our best <span className="text-brand-default">bakers</span>
        </h2>
        <div className="list-none justify-center flex gap-8 flex-wrap sm:justify-center">
          {!!bakers?.length &&
            bakers.map((baker) => (
              <div
                key={baker?._id}
                className="mb-4 text-brand-dark text-2xl font-bold md:text-4xl"
              >
                <div className="flex gap-4 list-none items-start">
                  <Image
                    src={baker?.image}
                    alt={baker?.name}
                    width={240}
                    height={388}
                    className="list-none w-[9rem] rounded-md rounded-bl-[12.5rem] shadow-custom md:w-[15rem]"
                  />
                  <div>
                    {baker.name}
                    <div className="max-w-[12rem] mt-6 mb-6 text-sm font-thin last:mb-0 md:text-xl md:max-w-[21rem]">
                      <PortableText value={baker?.content} />
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

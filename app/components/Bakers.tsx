import React from "react";
import Image from "next/image";
import useSWR from "swr";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { getBakers } from "@/sanity/sanity-utils";

// Define a fetcher function to use with SWR
const fetcher = async () => {
  const data = await getBakers();
  return data;
};

// const myPortableTextComponents: PortableTextComponents = {
//   types: {
//     image: ({ value }) => (
//       <p className="flex justify-center">{value.imageUrl}</p>
//     ),

//     callToAction: ({ value, isInline }) =>
//       isInline ? (
//         <a href={value.url}>{value.text}</a>
//       ) : (
//         <div className="callToAction">{value.text}</div>
//       ),
//   },

//   marks: {
//     link: ({ children, value }) => {
//       const rel = !value.href.startsWith("/")
//         ? "noreferrer noopener"
//         : undefined;
//       return (
//         <a href={value.href} rel={rel}>
//           {children}
//         </a>
//       );
//     },
//   },
// };

export default function Bakers() {
  // Use SWR to fetch data from the API route
  const { data: bakers, error } = useSWR("bakers", fetcher);

  // Handle loading state
  if (!bakers) return <p>Loading...</p>;

  // Handle error state
  if (error) return <p>Error loading bakers</p>;

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
                  className="list-none w-[140px] rounded-[4px] rounded-bl-[200px] shadow-custom md:w-[240px]"
                />
                <div>
                  {baker.name}
                  <div className="max-w-[187px] mt-6 mb-6 text-sm font-thin last:mb-0 md:text-xl md:max-w-[334px]">
                    <PortableText
                      value={baker.content}
                      // components={myPortableTextComponents}
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

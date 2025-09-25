import Image from "next/image";
import { getTraditions } from "@/sanity/sanity-utils";
import useSWR from "swr";
import { PortableText, PortableTextComponents } from "@portabletext/react";

const fetcher = async () => {
  const data = await getTraditions();
  return data;
};

function Traditions() {
  const { data } = useSWR("traditions", fetcher);
  const traditions = data?.[0];
  if (!traditions) return null;
  const { heading, content, image } = traditions;

  return (
    <section className="py-10 md:py-24 text-sm md:text-base" id="traditions">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start justify-center gap-10 md:gap-0 md:space-x-10 text-base md:text-xl">
          <div className="max-w-[43rem]">
            <h2 className="mb-6 text-[2rem] font-extrabold leading-tight mx-auto text-center md:mb-10 md:text-[4rem]">
              {heading}
            </h2>
            <div className="mb-5">
              <PortableText value={content} />
            </div>
          </div>
          <Image
            src={image}
            alt="baker"
            width={393}
            height={466}
            className="hidden md:block rounded-t-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Traditions;

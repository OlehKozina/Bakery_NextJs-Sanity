import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { ItemType } from "@/types";
import Heading from "../Heading";

function Traditions({ traditions }: { traditions?: ItemType }) {
  if (!traditions) return null;
  const { content, heading, image } = traditions;

  return (
    <section className="py-10 md:py-24 text-sm md:text-base" id="traditions">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start justify-center gap-10 md:gap-0 md:space-x-10 text-base md:text-xl">
          <div className="max-w-[43rem]">
            <Heading
              heading={heading}
              highlightLastWord
              className="mb-6 mx-auto text-center md:mb-10"
            />
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

import Image from "next/image";

function Traditions() {
  return (
    <section className="py-10 md:py-24 text-sm md:text-base" id="traditions">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start justify-center gap-10 md:gap-0 md:space-x-10 text-base md:text-xl">
          <div className="max-w-[710px]">
            <h2 className="mb-6  text-black text-[32px] font-extrabold leading-tight mx-auto text-center md:mb-10 md:text-[64px]">
              A new format of traditions
            </h2>
            <p className="mb-5">
              <span className="text-brand-color font-bold uppercase">
                Modern bakery
              </span>
              — this is a bakery that took all the best, and preserved the taste
              of traditional baking and the naturalness of the ingredients
            </p>
            <p className="mb-5 max-w-[350px]">
              We work as the most famous networks—
              <span className="text-brand-color font-bold">
                5 minutes and the order is ready
              </span>
              . Our bakeries also have a stylish design and high quality
              service!
            </p>
          </div>
          <Image
            src="/baker-man.jpg"
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

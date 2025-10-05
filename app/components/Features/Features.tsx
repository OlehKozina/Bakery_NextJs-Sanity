import { FeaturesType } from "@/types";
import Marquee from "react-fast-marquee";

function Features({ features }: { features?: FeaturesType }) {
  if (!features) return null;
  const { advantages } = features;

  return (
    <section className="py-4 bg-brand-default">
      <Marquee
        gradient={false}
        speed={50}
        className="rounded-3xl md:rounded-none"
      >
        {!!advantages?.length &&
          advantages.map((advantage) => (
            <span
              key={advantage}
              className="mx-10 text-sm md:text-lg md:font-light md:text-brand-light font-bold"
            >
              {advantage}
            </span>
          ))}
      </Marquee>
    </section>
  );
}

export default Features;

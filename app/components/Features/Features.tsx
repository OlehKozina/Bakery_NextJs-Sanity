import { FeaturesType } from "@/types";
import Marquee from "react-fast-marquee";

function Features({ features }: { features?: FeaturesType }) {
  if (!features) return null;
  const { advantages } = features;

  return (
    <section className="pt-10 pb-0 md:pt-4 md:pb-4 md:bg-brand-default">
      <Marquee
        gradient={false}
        speed={50}
        className="bg-muted-green rounded-3xl p-6 md:bg-brand-default md:rounded-none md:p-4"
      >
        {!!advantages?.length &&
          advantages.map((advantage) => (
            <span
              key={advantage}
              className="mx-10 text-sm md:text-lg md:font-light md:text-brand-light"
            >
              {advantage}
            </span>
          ))}
      </Marquee>
    </section>
  );
}

export default Features;

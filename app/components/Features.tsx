import { getFeatures } from "@/sanity/sanity-utils";
import useSWR from "swr";

const fetcher = async () => {
  const data = await getFeatures();
  return data;
};

function Pros() {
  const { data } = useSWR("features", fetcher);
  const pros = data?.[0];

  if (!pros) return null;
  const { advantages } = pros;
  return (
    <section className="pt-10 pb-0 md:pt-4 md:pb-4 md:bg-brand-default">
      <div className="container">
        <ul className="flex flex-col gap-4 bg-muted-green justify-center items-center rounded-3xl p-6 md:flex md:flex-row md:justify-between md:items-center md:gap-10 md:bg-brand-default md:rounded-none md:p-0">
          {!!advantages?.length &&
            advantages.map((advantage) => (
              <li
                className="text-sm md:text-lg md:font-light md:text-brand-light"
                key={advantage}
              >
                {advantage}
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}

export default Pros;

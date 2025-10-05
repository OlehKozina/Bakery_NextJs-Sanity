import Image from "next/image";

const iconPaths = [
  "/icons/bread1.svg",
  "/icons/bread2.svg",
  "/icons/breadBasket.svg",
  "/icons/breadLoaf.svg",
  "/icons/baguette.svg",
  "/icons/donut.svg",
  "/icons/muffin.svg",
];

export default function Icons() {
  const randomIcons = iconPaths.sort(() => Math.random() - 0.5).slice(0, 5);
  return (
    <div className="absolute z-under inset-0 overflow-hidden pointer-events-none invert">
      {randomIcons.map((icon, i) => (
        <Image
          key={i}
          src={icon}
          alt=""
          width={80}
          height={80}
          className={`absolute opacity-20 w-24
            ${i === 0 ? "top-10 left-10" : ""}
            ${i === 1 ? "top-1/3 right-0" : ""}
            ${i === 2 ? "bottom-0 left-1/4" : ""}
            ${i === 3 ? "bottom-10 right-1/3" : ""}
            ${i === 4 ? "top-1/2 left-1/2" : ""}
          `}
        />
      ))}
    </div>
  );
}

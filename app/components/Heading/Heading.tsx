import React from "react";
import clsx from "clsx";

const Heading = ({
  heading,
  className,
  highlightLastWord = false,
}: {
  heading?: string;
  className?: string;
  highlightLastWord?: boolean;
}) => {
  return (
    <h2
      className={clsx(
        "font-extrabold leading-tight text-3xl md:text-6xl",
        className
      )}
    >
      {heading?.split(" ").slice(0, -1).join(" ")}{" "}
      <span className={clsx(highlightLastWord && "text-brand-default")}>
        {heading?.split(" ").pop()}
      </span>
    </h2>
  );
};

export default Heading;

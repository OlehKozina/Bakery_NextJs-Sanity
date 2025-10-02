import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

const ArrowButton = ({
  direction,
  onClick,
}: {
  direction?: "left" | "right";
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "absolute bg-white rounded-full h-8 w-8 top-1/2 transform -translate-y-1/2 p-2 z-5 transition-transform",
        direction === "left"
          ? "left-0 hover:-translate-x-2"
          : "right-0 hover:translate-x-4"
      )}
    >
      <FontAwesomeIcon
        icon={direction === "left" ? faAngleLeft : faAngleRight}
        className="text-base"
      />
    </button>
  );
};

export default ArrowButton;

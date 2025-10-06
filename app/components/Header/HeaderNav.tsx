import React from "react";
import Image from "next/image";
import Navigation from "../Navigation";

const HeaderNav = ({
  navigation,
}: {
  navigation?: {
    title?: string;
    sectionId?: string;
  }[];
}) => {
  return (
    <nav className="flex items-center flex-grow gap-10">
      <a href="#" className="z-cover relative">
        <Image src="/logo.svg" alt="bakery_logo" width={100} height={24} />
      </a>
      <Navigation
        navigation={navigation}
        classNames={{
          root: "hidden md:flex list-none gap-16 flex-grow justify-center text-xl font-extrabold",
        }}
      />
    </nav>
  );
};

export default HeaderNav;

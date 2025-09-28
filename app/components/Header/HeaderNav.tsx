import React from "react";
import Image from "next/image";

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
      <ul className="hidden md:flex list-none gap-16 flex-grow justify-center">
        {!!navigation?.length &&
          navigation.map((link) => (
            <li key={link.sectionId}>
              <a
                className="text-brand-light no-underline transition-colors hover:text-brand-default"
                href={`#${link.sectionId}`}
              >
                {link.title}
              </a>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;

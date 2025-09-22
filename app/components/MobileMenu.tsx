import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface MenuProps {
  onClose: () => void;
}

const MobileMenu: React.FC<MenuProps> = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-brand-light z-50">
      <button
        className=" text-brand-dark z-10 border-none absolute top-4 right-[6.25rem] md:top-[2.5rem] md:right-[2.5rem]"
        type="button"
      >
        <FontAwesomeIcon
          icon={faXmark}
          className="hover:text-brand-default text-xl"
          onClick={onClose}
        />
      </button>
      <ul className="flex flex-col gap-5 m-5">
        <li>
          <a className="header__logo" href="#">
            <Image src="/logo.svg" alt="bakery_logo" width={100} height={24} />
          </a>
        </li>
        <li>
          <a
            className="no-underline text-brand-dark hover:text-brand-default"
            href="#traditions"
          >
            Our traditions
          </a>
        </li>
        <li>
          <a
            className="no-underline text-brand-dark hover:text-brand-default"
            href="#bakers"
          >
            Bakers
          </a>
        </li>
        <li>
          <a
            className="no-underline text-brand-dark hover:text-brand-default"
            href="#formats"
          >
            Formats
          </a>
        </li>
        <li>
          <a
            className="no-underline text-brand-dark hover:text-brand-default"
            href="#contacts"
          >
            Contacts
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;

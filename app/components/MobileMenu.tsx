import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface MenuProps {
  onClose: () => void;
}

const MobileMenu: React.FC<MenuProps> = ({ onClose }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-brand-light z-50 pt-14"
      style={{
        backgroundImage: `url(/mobile-bakery.jpg)`,
      }}
    >
      <a className="absolute top-5 left-5" href="#">
        <Image src="/logo.svg" alt="bakery_logo" width={100} height={24} />
      </a>
      <button
        className="text-brand-dark z-10 border-none absolute top-7 right-7"
        type="button"
      >
        <FontAwesomeIcon
          icon={faXmark}
          className="hover:text-brand-default text-xl text-white transition-colors"
          onClick={onClose}
        />
      </button>
      <ul className="flex flex-col gap-5 m-5 bg-muted-green rounded-3xl">
        <li>
          <a
            className="no-underline transition-colors text-brand-dark hover:text-brand-light"
            href="#traditions"
          >
            Our traditions
          </a>
        </li>
        <li>
          <a
            className="no-underline transition-colors text-brand-dark hover:text-brand-light"
            href="#bakers"
          >
            Bakers
          </a>
        </li>
        <li>
          <a
            className="no-underline transition-colors text-brand-dark hover:text-brand-light"
            href="#formats"
          >
            Formats
          </a>
        </li>
        <li>
          <a
            className="no-underline transition-colors text-brand-dark hover:text-brand-light"
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

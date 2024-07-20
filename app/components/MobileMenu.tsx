import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface MenuProps {
  onClose: () => void;
}

const MobileMenu: React.FC<MenuProps> = ({ onClose }) => {
  return (
    <div class="fixed top-0 left-0 w-full h-full bg-light-color">
      <button
        class=" text-color-primarydark z-10 border-none absolute top-4 right-[100px] md:top-[40px] md:right-[40px]"
        type="button"
      >
        <FontAwesomeIcon
          icon={faXmark}
          className="hover:text-brand-color text-xl"
          onClick={onClose}
        />
      </button>
      <ul class="flex flex-col gap-5 m-5">
        <li>
          <a className="header__logo" href="#">
            <Image src="/logo.svg" alt="bakery_logo" width={100} height={24} />
          </a>
        </li>
        <li>
          <a
            class="no-underline text-color-primarydark hover:text-brand-color "
            href="#traditions"
          >
            Our traditions
          </a>
        </li>
        <li>
          <a
            class="no-underline text-color-primarydark hover:text-brand-color "
            href="#cooks"
          >
            Bakers
          </a>
        </li>
        <li>
          <a
            class="no-underline text-color-primarydark hover:text-brand-color "
            href="#formats"
          >
            Formats
          </a>
        </li>
        <li>
          <a
            class="no-underline text-color-primarydark hover:text-brand-color "
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

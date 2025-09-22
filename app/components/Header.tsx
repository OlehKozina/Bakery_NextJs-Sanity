"use client";
import Image from "next/image";
import React, { useState } from "react";
import Form from "./Form";
import MobileMenu from "./MobileMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const openForm = () => setIsFormVisible(true);
  const closeForm = () => setIsFormVisible(false);

  const [isMobMenuVisible, setIsMobMenuVisible] = useState(false);
  const openMenu = () => setIsMobMenuVisible(true);
  const closeMenu = () => setIsMobMenuVisible(false);
  return (
    <header className="absolute top-0 left-0 w-full pt-4 z-10 md:pt-8">
      <div className="container">
        <div className="flex items-center gap-10">
          <nav className="flex items-center flex-grow gap-10">
            <a className="header__logo" href="#">
              <Image
                src="/logo.svg"
                alt="bakery_logo"
                width={100}
                height={24}
              />
            </a>
            <ul className="hidden md:flex list-none gap-16 flex-grow justify-center">
              <li>
                <a
                  className="text-brand-light no-underline transition-colors hover:text-brand-default"
                  href="#traditions"
                >
                  Our traditions
                </a>
              </li>
              <li>
                <a
                  className="text-brand-light no-underline transition-colors hover:text-brand-default"
                  href="#bakers"
                >
                  Bakers
                </a>
              </li>
              <li>
                <a
                  className="text-brand-light no-underline transition-colors hover:text-brand-default"
                  href="#formats"
                >
                  Formats
                </a>
              </li>
              <li>
                <a
                  className="text-brand-light no-underline transition-colors hover:text-brand-default"
                  href="#contacts"
                >
                  Contacts
                </a>
              </li>
            </ul>
          </nav>
          <button
            className="hidden md:block px-5 py-2.5 bg-brand-default text-brand-light border border-brand-default rounded-lg cursor-pointer font-semibold hover:opacity-80 md:px-8 md:py-4"
            type="button"
            onClick={openForm}
          >
            Request a call
          </button>
          {isFormVisible && <Form onClose={closeForm} />}
          <button
            className=" bg-transparent border-none text-brand-light md:hidden menu-btn-open"
            type="button"
          >
            <FontAwesomeIcon
              icon={faBars}
              className="hover:text-brand-default w-6"
              onClick={openMenu}
            />
            {isMobMenuVisible && <MobileMenu onClose={closeMenu} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

"use client";
import Link from "next/link";
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
                  className="text-light-color no-underline transition-colors duration-300 hover:text-brand-color"
                  href="#traditions"
                >
                  Our traditions
                </a>
              </li>
              <li>
                <a
                  className="text-light-color no-underline transition-colors duration-300 hover:text-brand-color"
                  href="#cooks"
                >
                  Bakers
                </a>
              </li>
              <li>
                <a
                  className="text-light-color no-underline transition-colors duration-300 hover:text-brand-color"
                  href="#formats"
                >
                  Formats
                </a>
              </li>
              <li>
                <a
                  className="text-light-color no-underline transition-colors duration-300 hover:text-brand-color"
                  href="#contacts"
                >
                  Contacts
                </a>
              </li>
            </ul>
          </nav>
          <button
            className="hidden md:block px-5 py-2.5 bg-brand-color text-light-color border border-brand-color rounded-lg cursor-pointer font-semibold hover:opacity-80 md:px-8 md:py-4"
            type="button"
            onClick={openForm}
          >
            Request a call
          </button>
          {isFormVisible && <Form onClose={closeForm} />}
          <button
            className="bg-transparent border-none text-light-color md:hidden menu-btn-open"
            type="button"
          >
            <FontAwesomeIcon
              icon={faBars}
              className="hover:text-brand-color w-6"
              on
              onClick={openMenu}
            />
            {isMobMenuVisible && <MobileMenu onClose={closeMenu} />}
          </button>
          <div className="fixed top-0 left-0 w-full h-full bg-light-color transform translate-x-full transition-transform duration-500 is-open:translate-x-0">
            <button
              className="bg-transparent border-none absolute top-4 right-24 menu-btn-close"
              type="button"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <ul className="flex flex-col gap-5 m-5">
              <li>
                <Image
                  src="/logo_mobile_menu.svg"
                  alt="mobile_logo"
                  width={100}
                  height={24}
                />
              </li>
              <li>
                <a
                  className="no-underline text-color-primarydark hover:text-brand-color menu-btn-close"
                  href="#traditions"
                >
                  Our traditions
                </a>
              </li>
              <li>
                <a
                  className="no-underline text-color-primarydark hover:text-brand-color menu-btn-close"
                  href="#cooks"
                >
                  Bakers
                </a>
              </li>
              <li>
                <a
                  className="no-underline text-color-primarydark hover:text-brand-color menu-btn-close"
                  href="#formats"
                >
                  Formats
                </a>
              </li>
              <li>
                <a
                  className="no-underline text-color-primarydark hover:text-brand-color menu-btn-close"
                  href="#contacts"
                >
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

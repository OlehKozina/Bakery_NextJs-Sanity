"use client";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderNav from "./HeaderNav";
import React, { useState } from "react";
import { NavigationType, FormType } from "@/types";
import MobileMenu from "../MobileMenu/MobileMenu";
import { ModalForm } from "../Form";
import clsx from "clsx";

const Header = ({
  header,
  form,
}: {
  header: NavigationType;
  form: FormType;
}) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const openForm = () => setIsFormVisible(true);
  const closeForm = () => setIsFormVisible(false);

  const [isMobMenuVisible, setIsMobMenuVisible] = useState(false);
  const openMenu = () => setIsMobMenuVisible(true);
  const closeMenu = () => setIsMobMenuVisible(false);

  if (!header) return null;
  const { navigation, privacyPolicy } = header;

  return (
    <header
      className={clsx(
        "absolute top-0 left-0 w-full pt-4 pb-4 z-10 md:pt-8 max-md:sticky max-md:bg-brand-dark/50 max-md:hover:!bg-brand-dark/80 max-md:rounded-2xl transition-all",
        isMobMenuVisible && "!xrounded-br-none"
      )}
    >
      <div className="container">
        <div className="flex items-center gap-10 relative">
          <HeaderNav navigation={navigation} />
          <button
            className="hidden transition-all md:block bg-brand-default text-brand-light border border-brand-default rounded-lg cursor-pointer text-xl font-extrabold hover:bg-opacity-80 px-6 py-3"
            type="button"
            onClick={openForm}
          >
            Request a call
          </button>
          <ModalForm
            onClose={closeForm}
            isVisible={isFormVisible}
            privacyPolicy={privacyPolicy}
            form={form}
          />
          {!isMobMenuVisible && (
            <button
              className=" bg-transparent border-none text-brand-light md:hidden menu-btn-open"
              type="button"
            >
              <FontAwesomeIcon
                icon={faBars}
                className="hover:text-brand-default w-6"
                onClick={openMenu}
              />
            </button>
          )}
          <MobileMenu
            onClose={closeMenu}
            isVisible={isMobMenuVisible}
            navigation={navigation}
            className="absolute -right-6 -top-3.5"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

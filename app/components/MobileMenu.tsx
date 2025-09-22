import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import Form from "./Form";

interface MenuProps {
  onClose: () => void;
  isVisible?: boolean;
}

const MobileMenu: React.FC<MenuProps> = ({ onClose, isVisible }) => {
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, pointerEvents: "none" }}
          animate={{ opacity: 1, pointerEvents: "all" }}
          exit={{ opacity: 0, pointerEvents: "none" }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 w-full h-full bg-brand-light z-50 p-14 overflow-scroll"
          style={{
            backgroundImage: `url(/mobile-bakery.jpg)`,
          }}
        >
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
          <ul className="flex mx-auto flex-col gap-5 m-5 bg-muted-green rounded-3xl py-2 mb-20 max-w-[38rem]">
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
          <div className="max-w-[38rem] bg-brand-dark rounded-3xl p-4 mx-auto">
            <h2 className="mb-4 text-4xl font-extrabold leading-[1.3] mx-auto text-center md:text-6xl">
              Join the bakery network
            </h2>
            <p className="text-brand-default text-center mb-3">
              Fill out the form so we can contact you
            </p>
            <div data-form="contact-form">
              <div className="mb-8">
                <label className="hidden" htmlFor="user-name">
                  Name
                </label>
                <input
                  className="w-full p-4 px-10 rounded-lg border border-brand-brick bg-brand-light text-base leading-[1.17]"
                  type="text"
                  id="user-name"
                  name="user-name"
                  placeholder="Name"
                />
              </div>
              <div className="mb-8">
                <label className="form-field__label hidden" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="w-full p-4 px-10 rounded-lg border border-brand-brick bg-brand-light text-base leading-[1.17]"
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                />
              </div>
              <div className="mb-8">
                <label className="form-field__label hidden" htmlFor="e-mail">
                  E-mail
                </label>
                <input
                  className="w-full p-4 px-10 rounded-lg border border-brand-brick bg-brand-light text-base leading-[1.17]"
                  type="email"
                  id="e-mail"
                  name="e-mail"
                  placeholder="Your e-mail"
                />
              </div>
              <button
                className="mx-auto mb-6 block px-5 py-2 bg-brand-default text-brand-light border border-brand-default rounded-lg cursor-pointer font-semibold md:px-8 md:py-4"
                type="button"
              >
                Request a call
              </button>
              <p className="mx-auto max-w-[15rem] text-xs text-center">
                By clicking the button I agree with{" "}
                <span>
                  <a className="text-brand-default underline" href="#">
                    privacy policy
                  </a>
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;

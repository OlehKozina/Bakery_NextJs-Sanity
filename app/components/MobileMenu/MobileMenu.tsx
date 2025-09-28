import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import Form from "../Form/Form";
import { FormType } from "@/types";
import { PortableTextBlock } from "next-sanity";

interface MenuProps {
  onClose: () => void;
  form?: FormType;
  isVisible?: boolean;
  navigation?: {
    title?: string;
    sectionId?: string;
  }[];
  privacyPolicy?: PortableTextBlock;
}

const MobileMenu: React.FC<MenuProps> = ({
  isVisible,
  navigation,
  onClose,
  form,
  privacyPolicy,
}) => {
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
          className="fixed inset-0 bg-brand-light z-50 p-14 overflow-scroll"
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
          <ul className="flex text-center mx-auto flex-col gap-5 m-5 bg-muted-green rounded-3xl py-2 mb-20 max-w-[38rem]">
            {!!navigation?.length &&
              navigation.map((link) => (
                <li key={link.sectionId}>
                  <a
                    className="no-underline transition-colors text-brand-dark hover:text-brand-light"
                    href={`#${link.sectionId}`}
                    onClick={onClose}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
          </ul>
          <Form
            heading="Join the Bakery network"
            theme="dark"
            form={form}
            privacyPolicy={privacyPolicy}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import {
  PortableText,
  PortableTextBlock,
  PortableTextComponents,
} from "next-sanity";
import React, { useEffect } from "react";

interface PrivacyPolicyProps {
  onClose: () => void;
  isVisible?: boolean;
  privacyPolicy?: PortableTextBlock;
}
const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mb-4 mx-auto">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold">{children}</h3>
    ),
    normal: ({ children }) => <p className="mb-4 !text-left">{children}</p>,
  },
};

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({
  isVisible,
  onClose,
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark bg-opacity-50 p-5"
        >
          <div className="relative z-10 overflow-y-auto flex flex-col justify-center items-left w-full max-w-[37rem] h-full bg-brand-light rounded-[2rem] transition-opacity duration-slow md:max-w-[55rem] px-8">
            <button
              className="text-brand-dark z-10 border-none absolute top-10 right-10"
              type="button"
            >
              <FontAwesomeIcon
                icon={faXmark}
                className="hover:text-brand-default text-xl text-black transition-colors"
                onClick={onClose}
              />
            </button>
            <PortableText value={privacyPolicy || []} components={components} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PrivacyPolicy;

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { PortableTextBlock } from "next-sanity";
import React from "react";
import Form from "./Form";
import { FormType } from "@/types";

interface FormProps {
  onClose: () => void;
  isVisible?: boolean;
  privacyPolicy?: PortableTextBlock;
  form?: FormType;
}

const ModalForm: React.FC<FormProps> = ({
  isVisible,
  onClose,
  privacyPolicy,
  form,
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark bg-opacity-50 p-5 {
}"
          initial={{ opacity: 0, pointerEvents: "none" }}
          animate={{ opacity: 1, pointerEvents: "all" }}
          exit={{ opacity: 0, pointerEvents: "none" }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative z-10 overflow-y-auto flex flex-col justify-center items-center w-full max-w-[37rem] h-full bg-brand-light rounded-[2rem] transition-opacity duration-slow md:max-w-[55rem]">
            <button
              className="border-none bg-transparent cursor-pointer absolute top-3 right-3 md:top-10 md:right-10"
              type="button"
            >
              <FontAwesomeIcon
                icon={faXmark}
                className="hover:text-brand-default text-xl transition-colors"
                onClick={onClose}
              />
            </button>
            <Form
              theme="light"
              heading="Request a call"
              privacyPolicy={privacyPolicy}
              form={form}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalForm;

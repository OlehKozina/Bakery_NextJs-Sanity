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
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark bg-opacity-50 p-5"
          initial={{ opacity: 0, pointerEvents: "none" }}
          animate={{ opacity: 1, pointerEvents: "all" }}
          exit={{ opacity: 0, pointerEvents: "none" }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative z-10 overflow-y-auto flex flex-col justify-center items-center w-auto h-auto bg-brand-light rounded-[2rem] transition-opacity duration-slow"
          >
            <button
              className="border-none bg-transparent cursor-pointer absolute top-5 right-5"
              type="button"
            >
              <FontAwesomeIcon
                icon={faXmark}
                className="hover:text-brand-default text-xl transition-colors"
                onClick={onClose}
              />
            </button>
            <Form
              theme="dark"
              className="p-12"
              heading="Request a call"
              privacyPolicy={privacyPolicy}
              form={form}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalForm;

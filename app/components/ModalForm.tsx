import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Form from "./Form";

interface FormProps {
  onClose: () => void;
}

const ModalForm: React.FC<FormProps> = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark bg-opacity-50 p-5 {
}"
    >
      <div className="relative z-10 overflow-y-auto flex flex-col justify-center items-center w-full max-w-[37rem] h-full bg-brand-light rounded-[2rem] transition-opacity duration-slow md:max-w-[55rem]">
        <button
          className="border-none bg-transparent cursor-pointer absolute top-3 right-3 md:top-10 md:right-10"
          type="button"
        >
          <FontAwesomeIcon
            icon={faXmark}
            className="hover:text-brand-default w-6"
            onClick={onClose}
          />
        </button>
        <Form theme="light" heading="Request a call" />
      </div>
    </div>
  );
};

export default ModalForm;

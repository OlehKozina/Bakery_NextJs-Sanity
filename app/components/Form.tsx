import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface FormProps {
  onClose: () => void;
}

const Form: React.FC<FormProps> = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark bg-opacity-50 p-5 {
}"
    >
      <div className="relative z-10 overflow-y-auto flex flex-col justify-center items-center w-full max-w-[37rem] h-full bg-brand-light rounded-[2rem] transition-opacity-custom md:max-w-[55rem]">
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
        <h2 className="relative z-20 mb-2 mt-12 text-4xl font-extrabold leading-[1.3] mx-auto text-center md:text-6xl">
          Request a call
        </h2>
        <p className="relative mx-auto mb-5 text-center text-brand-default text-lg">
          Leave a request and our specialist will contact you!
        </p>
        <form name="contact-form">
          <div className="mb-8">
            <label className="hidden">Name</label>
            <input
              className="w-full px-10 py-4 rounded-lg border border-brand-brick bg-transparent-important text-base leading-[1.17] placeholder-brand-brick placeholder:text-base placeholder:leading-[1.17] focus:border-brand-default outline-none"
              type="text"
              id="user-name"
              name="user-name"
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-8">
            <label className="hidden">Phone</label>
            <input
              className="w-full px-10 py-4 rounded-lg border border-brand-brick bg-transparent-important text-base leading-[1.17] placeholder-brand-brick placeholder:text-base placeholder:leading-[1.17] focus:border-brand-default outline-none"
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone"
              pattern="^\+[0-9]{12}"
              required
            />
          </div>
          <div className="mb-8">
            <label className="hidden">E-mail</label>
            <input
              className="w-full px-10 py-4 rounded-lg border border-brand-brick bg-transparent-important text-base leading-[1.17] placeholder-brand-brick placeholder:text-base placeholder:leading-[1.17] focus:border-brand-default outline-none"
              type="email"
              id="e-mail"
              name="e-mail"
              placeholder="Your e-mail"
              required
            />
          </div>
          <button
            className="mx-auto mb-6 block px-5 py-2.5 bg-brand-default text-brand-light border border-brand-default rounded-lg cursor-pointer font-base hover:opacity-80 md:px-8 md:py-4"
            type="submit"
          >
            Request a call
          </button>
          <p className="mx-auto max-w-[14rem] text-xs text-center">
            By clicking the button I agree with{" "}
            <span>
              {" "}
              <a className="text-brand-default underline" href="#">
                privacy policy
              </a>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Form;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface FormProps {
  onClose: () => void;
}

const Form: React.FC<FormProps> = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-color-primarydark bg-opacity-50 p-5 {
}"
    >
      <div className="relative z-10 flex flex-col justify-center items-center w-full max-w-[680px] h-full max-h-[680px] bg-light-color rounded-[32px] p-12 overflow-y-auto transition-opacity-custom md:p-32 md:max-w-[880px]">
        <button
          className="border-none bg-transparent cursor-pointer absolute top-[10px] right-[10px] md:top-[40px] md:right-[40px]"
          type="button"
        >
          <FontAwesomeIcon
            icon={faXmark}
            className="hover:text-brand-color w-6"
            onClick={onClose}
          />
        </button>
        <h2 className="relative z-20 mb-2 mt-[50px] text-black text-[42px] font-extrabold leading-[1.3] mx-auto text-center md:text-[64px]">
          Request a call
        </h2>
        <p className="relative mx-auto mb-5 text-center text-brand-color text-[18px]">
          Leave a request and our specialist will contact you!
        </p>
        <form name="contact-form">
          <div className="mb-8">
            <label className="hidden">Name</label>
            <input
              className="w-full px-[42px] py-[16px] rounded-lg border border-[#a18268] bg-transparent-important text-[16px] leading-[1.17] placeholder-[#a18268] placeholder:text-[16px] placeholder:leading-[1.17] focus:border-brand-color outline-none"
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
              className="w-full px-[42px] py-[16px] rounded-lg border border-[#a18268] bg-transparent-important text-[16px] leading-[1.17] placeholder-[#a18268] placeholder:text-[16px] placeholder:leading-[1.17] focus:border-brand-color outline-none"
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
              className="w-full px-[42px] py-[16px] rounded-lg border border-[#a18268] bg-transparent-important text-[16px] leading-[1.17] placeholder-[#a18268] placeholder:text-[16px] placeholder:leading-[1.17] focus:border-brand-color outline-none"
              type="email"
              id="e-mail"
              name="e-mail"
              placeholder="Your e-mail"
              required
            />
          </div>
          <button
            className="mx-auto mb-6 block px-5 py-2.5 bg-brand-color text-light-color border border-brand-color rounded-lg cursor-pointer font-base hover:opacity-80 md:px-8 md:py-4"
            type="submit"
          >
            Request a call
          </button>
          <p className="mx-auto max-w-[220px] text-xs text-center">
            By clicking the button I agree with{" "}
            <span>
              {" "}
              <a className="text-brand-color underline" href="#">
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

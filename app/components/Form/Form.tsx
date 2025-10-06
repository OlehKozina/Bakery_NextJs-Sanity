"use client";
import clsx from "clsx";
import { PortableTextBlock } from "next-sanity";
import React, { useState } from "react";
import PrivacyPolicy from "./PrivacyPolicy";
import { FormType } from "@/types";
import Heading from "../Heading";
import { useLockScroll } from "@/app/hooks/useLockScroll";

interface FormProps {
  heading?: string;
  isVisible?: boolean;
  theme?: "light" | "dark" | "none";
  privacyPolicy?: PortableTextBlock;
  form?: FormType;
  className?: string;
  classNames?: {
    privacyPolicy?: string;
  };
}

const Form = ({
  heading,
  privacyPolicy,
  form,
  theme = "none",
  className,
  classNames,
  isVisible,
}: FormProps) => {
  const [isPolicyVisible, setIsPolicyVisible] = useState(false);
  useLockScroll(isVisible || isPolicyVisible);
  const openPolicy = () => setIsPolicyVisible(true);
  const closePolicy = () => setIsPolicyVisible(false);
  if (!form) return;
  const { name, fields, buttonLabel } = form;

  return (
    <div
      className={clsx(
        "max-w-[38rem] rounded-3xl p-12 mx-auto",
        theme === "dark" && "bg-brand-dark",
        theme === "light" && "bg-brand-light",
        className
      )}
    >
      <Heading
        heading={heading}
        className={clsx(
          "mb-4 mx-auto text-center text-2xl lg:!text-6xl",
          theme === "dark" ? "text-brand-light" : "text-black"
        )}
      />
      <p className="text-brand-default text-center mb-3">{name}</p>
      <form
        data-form="contact-form"
        className="max-w-[30rem] flex flex-col items-center mx-auto text-brand-dark"
      >
        {!!fields?.length &&
          fields.map((field) => {
            const { name, required, type, label } = field;
            return (
              <div className="mb-4 md:mb-8 w-3/4" key={label}>
                <label className="hidden" htmlFor="user-name">
                  {label}
                </label>
                <input
                  className="w-full py-2 md:py-4 px-5 md:px-10 rounded-lg border transition-all border-brand-brick bg-brand-light text-base leading-[1.17]"
                  type={type}
                  placeholder={name}
                  required={required}
                />
              </div>
            );
          })}
        <button
          className="mx-auto transition-all mb-6 block px-5 py-2 bg-brand-default hover:bg-opacity-80 text-brand-light border border-brand-default rounded-lg cursor-pointer text-xl font-extrabold md:px-8 md:py-4"
          type="button"
        >
          {buttonLabel}
        </button>
        <div
          className={clsx(
            "mx-auto max-w-[15rem] text-xs text-center",
            theme == "dark" && "text-brand-default"
          )}
        >
          By clicking the button I agree with{" "}
          <span>
            <button
              type="button"
              className="text-brand-default underline hover:opacity-80 transition-opacity"
              onClick={openPolicy}
            >
              privacy policy
            </button>
            {privacyPolicy && (
              <PrivacyPolicy
                onClose={closePolicy}
                privacyPolicy={privacyPolicy}
                isVisible={isPolicyVisible}
                className={classNames?.privacyPolicy}
              />
            )}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Form;

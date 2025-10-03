"use client";
import clsx from "clsx";
import { PortableTextBlock } from "next-sanity";
import React, { useState } from "react";
import PrivacyPolicy from "./PrivacyPolicy";
import { FormType } from "@/types";
import Heading from "../Heading";

interface FormProps {
  heading?: string;
  theme?: "light" | "dark" | "none";
  privacyPolicy?: PortableTextBlock;
  form?: FormType;
}

const Form = ({ heading, privacyPolicy, form, theme = "none" }: FormProps) => {
  const [isPolicyVisible, setIsPolicyVisible] = useState(false);
  const openPolicy = () => setIsPolicyVisible(true);
  const closePolicy = () => setIsPolicyVisible(false);
  if (!form) return;
  const { name, fields, buttonLabel } = form;

  return (
    <div
      className={clsx(
        "max-w-[38rem] rounded-3xl p-4 mx-auto",
        theme === "dark" && "bg-brand-dark",
        theme === "light" && "bg-brand-light"
      )}
    >
      <Heading
        heading={heading}
        className={clsx(
          "mb-4 mx-auto text-center",
          theme === "dark" ? "text-brand-light" : "text-black"
        )}
      />
      <p className="text-brand-default text-center mb-3">{name}</p>
      <form data-form="contact-form" className="max-w-[30rem] mx-auto">
        {!!fields?.length &&
          fields.map((field) => {
            const { name, required, type, label } = field;
            return (
              <div className="mb-8" key={label}>
                <label className="hidden" htmlFor="user-name">
                  {label}
                </label>
                <input
                  className="w-full p-4 px-10 rounded-lg border transition-all border-brand-brick bg-brand-light text-base leading-[1.17]"
                  type={type}
                  placeholder={name}
                  required={required}
                />
              </div>
            );
          })}
        <button
          className="mx-auto transition-opacity mb-6 block px-5 py-2 bg-brand-default hover:opacity-80 text-brand-light border border-brand-default rounded-lg cursor-pointer font-semibold md:px-8 md:py-4"
          type="button"
        >
          {buttonLabel}
        </button>
        <p
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
              />
            )}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Form;

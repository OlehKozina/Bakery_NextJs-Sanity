import clsx from "clsx";
import React from "react";

interface FormProps {
  heading?: string;
  theme?: "light" | "dark";
}

const Form = ({ heading, theme = "light" }: FormProps) => {
  return (
    <div
      className={clsx(
        "max-w-[38rem] rounded-3xl p-4 mx-auto",
        theme === "dark" ? "bg-brand-dark" : "bg-brand-light"
      )}
    >
      <h2
        className={clsx(
          "mb-4 text-4xl font-extrabold leading-[1.3] mx-auto text-center md:text-6xl",
          theme === "dark" ? "text-brand-light" : "text-black"
        )}
      >
        {heading}
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
  );
};

export default Form;

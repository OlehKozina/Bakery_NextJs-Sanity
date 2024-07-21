import React, { useState } from "react";
import Form from "./Form";

function JoinBakery() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const openForm = () => setIsFormVisible(true);
  const closeForm = () => setIsFormVisible(false);

  return (
    <section className="py-5 md:py-12" id="contacts">
      <div className="container">
        <div className="flex flex-col items-center gap-6 pb-0 md:flex-row md:gap-10 md:pb-24">
          <div className="max-w-605">
            <h2 className="mb-4 text-black text-[32px] font-extrabold leading-[1.3] mx-auto text-center md:text-[64px]">
              Join the bakery network
            </h2>
            <p className="text-brand-color text-center mb-3">
              Fill out the form so we can contact you
            </p>
            <div name="contact-form">
              <div className="mb-8">
                <label className="hidden">Name</label>
                <input
                  className="w-full p-4 px-[42px] rounded-lg border border-[#a18268] bg-transparent-important text-[16px] leading-[1.17]"
                  type="text"
                  id="user-name"
                  name="user-name"
                  placeholder="Name"
                />
              </div>
              <div className="mb-8">
                <label className="form-field__label hidden">Phone</label>
                <input
                  className="w-full p-4 px-[42px] rounded-lg border border-[#a18268] bg-transparent-important text-[16px] leading-[1.17]"
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                />
              </div>
              <div className="mb-8">
                <label className="form-field__label hidden">E-mail</label>
                <input
                  className="w-full p-4 px-[42px] rounded-lg border border-[#a18268] bg-transparent-important text-[16px] leading-[1.17]"
                  type="email"
                  id="e-mail"
                  name="e-mail"
                  placeholder="Your e-mail"
                />
              </div>
              <button
                className="mx-auto mb-6 block px-5 py-2 bg-brand-color text-light-color border border-brand-color rounded-lg cursor-pointer font-semibold md:px-8 md:py-4"
                type="button"
                onClick={openForm}
              >
                Request a call
              </button>
              <p className="mx-auto max-w-[240px] text-[12px] text-center">
                By clicking the button I agree with{" "}
                <span>
                  <a className="text-brand-color underline" href="#">
                    privacy policy
                  </a>
                </span>
              </p>
            </div>
          </div>
          <iframe
            className="flex-shrink-0 h-44 -mx-6 rounded-lg w-full border-none md:mx-auto md:w-80 md:h-[500px] lg:w-[603px] lg:h-[595px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1728.3902700299825!2d-113.49473926336957!3d53.54323228164413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0224f4fad4c0b%3A0xaf55097e5e001440!2z0K3QtNC80L7QvdGC0L7QvSDQodC40YLQuCDQodC10L3RgtGA!5e0!3m2!1sru!2sca!4v1706565945450!5m2!1sru!2sca"
            width="400"
            height="395"
            loading="lazy"
          ></iframe>
        </div>
        {isFormVisible && <Form onClose={closeForm} />}
      </div>
    </section>
  );
}

export default JoinBakery;

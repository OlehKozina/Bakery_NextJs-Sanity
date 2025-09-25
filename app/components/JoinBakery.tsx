import React from "react";
import Form from "./Form";

function JoinBakery() {
  return (
    <section className="py-5 md:py-12" id="contacts">
      <div className="container">
        <div className="flex flex-col items-center gap-6 pb-0 md:flex-row md:gap-10 md:pb-24">
          <Form heading="Join the bakery network" />
          <iframe
            className="flex-shrink-0 -mx-6 rounded-lg w-full border-none md:mx-auto md:w-80 lg:w-[38rem]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1728.3902700299825!2d-113.49473926336957!3d53.54323228164413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0224f4fad4c0b%3A0xaf55097e5e001440!2z0K3QtNC80L7QvdGC0L7QvSDQodC40YLQuCDQodC10L3RgtGA!5e0!3m2!1sru!2sca!4v1706565945450!5m2!1sru!2sca"
            width="400"
            height="395"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default JoinBakery;

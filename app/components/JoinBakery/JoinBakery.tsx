"use client";
import React from "react";
import { JoinBakeryType } from "@/types";
import Form from "../Form";
import Icons, { Flour } from "../Icons";

function JoinBakery({ joinBakery }: { joinBakery?: JoinBakeryType }) {
  if (!joinBakery) return null;
  const { direction, form, heading } = joinBakery;
  console.log("heading", heading);
  return (
    <section
      className="py-5 md:py-12 relative overflow-hidden max-md:scroll-mt-16"
      id="contacts"
    >
      <Flour className="bottom-0 left-2/3" />
      <Icons />
      <div className="container">
        <div className="flex flex-col items-center gap-6 pb-0 md:flex-row md:gap-10 md:pb-24">
          <Form
            heading={heading}
            form={form}
            theme="dark"
            className="hover:scale-105 transition-transform !p-8"
          />
          <iframe
            className="flex-shrink-0 -mx-6 rounded-lg w-full border-none md:mx-auto md:max-w-[30rem] lg:max-w-[38rem]"
            src={direction}
            width="600"
            height="450"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default JoinBakery;

"use client";
import React from "react";
import { JoinBakeryType } from "@/types";
import Form from "../Form/Form";
import Heading from "../Heading";

function JoinBakery({ joinBakery }: { joinBakery?: JoinBakeryType }) {
  if (!joinBakery) return null;
  const { direction, form, heading } = joinBakery;

  return (
    <section className="py-5 md:py-12" id="contacts">
      <div className="container">
        <div className="flex flex-col items-center gap-6 pb-0 md:flex-row md:gap-10 md:pb-24">
          <Form heading={heading} form={form} />
          <iframe
            className="flex-shrink-0 -mx-6 rounded-lg w-full border-none md:mx-auto md:w-80 lg:w-[38rem]"
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

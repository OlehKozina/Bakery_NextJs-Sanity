"use client";
import React from "react";
import { PortableTextBlock } from "@portabletext/react";
import BakerContent from "./BakerContent";
import BakerImage from "./BakerImage";

interface BakerType {
  _key?: string;
  image?: string;
  content?: PortableTextBlock[];
  name?: string;
}

const Baker = ({ image, content, name }: BakerType) => {
  return (
    <div className="mb-4 text-brand-light text-2xl font-bold md:text-4xl">
      <div className="flex gap-4 list-none items-start">
        {image && <BakerImage {...{ name, image }} />}
        {(name || content) && <BakerContent {...{ name, content }} />}
      </div>
    </div>
  );
};

export default Baker;

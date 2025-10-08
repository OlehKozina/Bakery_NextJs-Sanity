import { defineType } from "sanity";
import { FaImage } from "react-icons/fa";
import { F, G } from "./tool";

export default defineType({
  name: "hero",
  type: "document",
  icon: FaImage,
  groups: [G.define("content", { default: true }), G.define("seo")],

  fields: [
    ...G.group("content", [
      F.string({
        name: "heading",
      }),
      F.image({
        name: "image",
        hotspot: true,
      }),
    ]),

    ...G.group("seo", [
      F.string({ name: "seoTitle" }),
      F.string({ name: "seoKeywords" }),
      F.slug({ name: "seoSlug" }),
      F.image({ name: "seoImage" }),
    ]),
  ],

  preview: {
    select: {
      heading: "heading",
      image: "image",
    },
    prepare({ heading, image }) {
      return {
        title: heading || "Hero section",
        media: image || FaImage,
      };
    },
  },
});

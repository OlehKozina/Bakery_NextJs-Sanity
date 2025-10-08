import { defineType } from "sanity";
import { FaBook } from "react-icons/fa";
import { F, G } from "./tool";

export default defineType({
  name: "traditions",
  type: "document",
  icon: FaBook,
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
      F.image({
        name: "horizontalImage",
        hotspot: true,
      }),
      F.array({
        name: "content",
        of: [{ type: "block" }],
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
        title: heading || "Traditions section",
        media: image || FaBook,
      };
    },
  },
});

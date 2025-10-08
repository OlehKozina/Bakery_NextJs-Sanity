import { defineType } from "sanity";
import { FaCheckCircle } from "react-icons/fa";
import { F, G } from "./tool";

export default defineType({
  name: "features",
  type: "document",
  icon: FaCheckCircle,

  groups: [G.define("content", { default: true }), G.define("seo")],

  fields: [
    ...G.group("content", [
      F.string({
        name: "heading",
      }),
      F.array({
        name: "advantages",
        of: [F.string({ name: "advantage" })],
      }),
    ]),

    ...G.group("seo", [
      F.string({ name: "seoTitle" }),
      F.string({ name: "seoKeywords" }),
      F.slug?.({ name: "seoSlug" }),
      F.image({ name: "seoImage" }),
    ]),
  ],

  preview: {
    select: {
      heading: "heading",
      advantages: "advantages",
    },
    prepare({
      heading,
      advantages,
    }: {
      heading?: string;
      advantages?: string[];
    }) {
      const firstAdvantage =
        Array.isArray(advantages) && advantages.length
          ? advantages[0]
          : undefined;

      return {
        title: heading || "Features section",
        subtitle: firstAdvantage
          ? `${firstAdvantage}…`
          : "No advantages added yet",
        media: FaCheckCircle,
      };
    },
  },
});

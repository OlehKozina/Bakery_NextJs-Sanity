import { defineType } from "sanity";
import { MarkerIcon } from "@sanity/icons";
import { F } from "./tool";

export default defineType({
  name: "joinBakery",
  type: "document",
  title: "Join the Bakery",
  icon: MarkerIcon,
  fields: [
    F.string({
      name: "heading",
    }),
    F.reference({
      name: "form",
      to: [{ type: "form" }],
    }),
    F.string({
      name: "direction",
    }),
  ],
  preview: {
    select: {
      heading: "heading",
    },
    prepare({ heading }) {
      return {
        title: heading || "Join the Bakery section",
      };
    },
  },
});

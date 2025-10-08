import { defineType, defineField } from "sanity";
import { FaBreadSlice } from "react-icons/fa";
import { F, G } from "./tool";

export default defineType({
  name: "formats",
  type: "document",
  icon: FaBreadSlice,
  groups: [G.define("content", { default: true }), G.define("seo")],

  fields: [
    ...G.group("content", [
      F.string({
        name: "heading",
      }),
      F.array({
        name: "bakeryTypes",
        of: [
          defineField(
            F.object({
              name: "bakeryType",
              fields: [
                F.string({
                  name: "name",
                }),
                F.image({
                  name: "image",
                  hotspot: true,
                }),
                F.array({
                  name: "content",
                  of: [{ type: "block" }],
                }),
              ],
            })
          ),
        ],
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
      firstBakery: "bakeryTypes.0.name",
      image: "bakeryTypes.0.image",
    },
    prepare({
      heading,
      firstBakery,
      image,
    }: {
      heading?: string;
      firstBakery?: string;
      image?: any;
    }) {
      return {
        title: heading || "Bakery Formats",
        subtitle: firstBakery
          ? `Includes ${firstBakery} and more`
          : "No bakery types added yet",
        media: image || FaBreadSlice,
      };
    },
  },
});

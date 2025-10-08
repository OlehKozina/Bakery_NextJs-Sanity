import { defineType } from "sanity";
import { F, G } from "./tool";
import { UserIcon } from "@sanity/icons";

export default defineType({
  name: "bakers",
  type: "document",
  icon: UserIcon,
  groups: [G.define("content", { default: true }), G.define("seo")],

  fields: [
    ...G.group("content", [
      F.text({ name: "heading" }),
      F.array({
        name: "bakers",
        of: [
          F.object({
            name: "bakerInfo",
            fields: [
              F.string({
                name: "name",
                validation: (Rule: any) => Rule.required(),
              }),
              F.image({ name: "image", hotspot: true }),
              F.block({ name: "content" }),
            ],
          }),
        ],
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
      bakerName: "bakers.0.name",
      image: "bakers.0.image",
    },
    prepare({
      heading,
      bakerName,
      image,
    }: {
      heading?: string;
      bakerName?: string;
      image?: any;
    }) {
      return {
        title: heading || bakerName || "Bakers section",
        subtitle: bakerName
          ? `Includes ${bakerName} and others`
          : "No bakers yet",
        media: image,
      };
    },
  },
});

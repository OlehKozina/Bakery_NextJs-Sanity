import { ALL_FIELDS_GROUP } from "sanity";

const format = {
  name: "format",
  title: "Formats",
  type: "document",
  groups: [
    {
      name: "content",
      title: "Content",
    },
    {
      name: "seo",
      title: "SEO",
    },
    {
      ...ALL_FIELDS_GROUP,
      hidden: true,
    },
  ],
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      group: "content",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      group: "content",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
      group: "content",
    },
    { name: "seoTitle", title: "SEO title", type: "string", group: "seo" },
    { name: "seoKeywords", title: "Keywords", type: "string", group: "seo" },
    { name: "seoSlug", title: "Slug", type: "slug", group: "seo" },
    { name: "seoImage", title: "Image", type: "image", group: "seo" },
  ],
};

export default format;

const traditions = {
  fields: [
    {
      group: "content",
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      group: "content",
      name: "image",
      options: { hotspot: true },
      title: "Image",
      type: "image",
    },
    {
      group: "content",
      name: "horizontalImage",
      options: { hotspot: true },
      title: "Horizontal Image",
      type: "image",
    },
    {
      group: "content",
      name: "content",
      of: [{ type: "block" }],
      title: "Content",
      type: "array",
    },
    { group: "seo", name: "seoTitle", title: "SEO title", type: "string" },
    { group: "seo", name: "seoKeywords", title: "Keywords", type: "string" },
    { group: "seo", name: "seoSlug", title: "Slug", type: "slug" },
    { group: "seo", name: "seoImage", title: "Image", type: "image" },
  ],
  groups: [
    {
      name: "content",
      title: "Content",
    },
    {
      name: "seo",
      title: "SEO",
    },
  ],
  name: "traditions",
  title: "Traditions",
  type: "document",
};

export default traditions;

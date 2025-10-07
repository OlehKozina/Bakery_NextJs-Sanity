const bakers = {
  fields: [
    {
      group: "content",
      name: "heading",
      title: "Heading",
      type: "text",
    },
    {
      group: "content",
      name: "bakers",
      of: [
        {
          fields: [
            { name: "name", title: "Name", type: "string" },
            {
              name: "image",
              options: { hotspot: true },
              title: "Image",
              type: "image",
            },
            {
              name: "content",
              of: [{ type: "block" }],
              title: "Content",
              type: "array",
            },
          ],
          name: "bakerInfo",
          title: "Baker",
          type: "object",
        },
      ],
      title: "Bakers",
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
  name: "bakers",
  title: "Bakers",
  type: "document",
};

export default bakers;

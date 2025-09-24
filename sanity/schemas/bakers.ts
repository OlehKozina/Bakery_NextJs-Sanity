const bakers = {
  name: "bakers",
  title: "Bakers",
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
  ],
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
      group: "content",
    },
    {
      name: "bakers",
      title: "Bakers",
      type: "array",
      group: "content",
      of: [
        {
          type: "object",
          name: "baker",
          title: "Baker",
          fields: [
            { name: "name", title: "Name", type: "string" },
            {
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            },
            {
              name: "content",
              title: "Content",
              type: "array",
              of: [{ type: "block" }],
            },
          ],
        },
      ],
    },
    { name: "seoTitle", title: "SEO title", type: "string", group: "seo" },
    { name: "seoKeywords", title: "Keywords", type: "string", group: "seo" },
    { name: "seoSlug", title: "Slug", type: "slug", group: "seo" },
    { name: "seoImage", title: "Image", type: "image", group: "seo" },
  ],
};

export default bakers;

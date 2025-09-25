const features = {
  name: "features",
  title: "Features",
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
      initialValue: "Features",
      readOnly: true,
      group: "content",
    },
    {
      name: "advantages",
      title: "Advantages",
      type: "array",
      group: "content",
      of: [
        {
          type: "string",
          name: "advantage",
          title: "Advantage",
        },
      ],
    },
    { name: "seoTitle", title: "SEO title", type: "string", group: "seo" },
    { name: "seoKeywords", title: "Keywords", type: "string", group: "seo" },
    { name: "seoSlug", title: "Slug", type: "slug", group: "seo" },
    { name: "seoImage", title: "Image", type: "image", group: "seo" },
  ],
};

export default features;

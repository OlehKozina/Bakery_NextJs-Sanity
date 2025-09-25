const features = {
  fields: [
    {
      group: "content",
      initialValue: "Features",
      name: "heading",
      readOnly: true,
      title: "Heading",
      type: "string",
    },
    {
      group: "content",
      name: "advantages",
      of: [
        {
          name: "advantage",
          title: "Advantage",
          type: "string",
        },
      ],
      title: "Advantages",
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
  name: "features",
  title: "Features",
  type: "document",
};

export default features;

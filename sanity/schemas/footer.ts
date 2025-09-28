const footer = {
  fields: [
    {
      name: "navigation",
      of: [{ type: "link" }],
      type: "array",
    },
    {
      name: "phone",
      type: "string",
    },
    {
      name: "email",
      type: "string",
    },
    {
      name: "privacyPolicy",
      title: "Privacy Policy",
      to: [{ type: "privacyPolicy" }],
      type: "reference",
    },
    {
      name: "footerImages",
      type: "object",
      fields: [
        {
          name: "leftImage",
          options: { hotspot: true },
          title: "Left Image",
          type: "image",
        },
        {
          name: "rightImage",
          options: { hotspot: true },
          title: "Right Image",
          type: "image",
        },
      ],
    },
    {
      fields: [
        {
          name: "name",
          title: "Name",
          type: "string",
        },
        {
          name: "link",
          title: "Link",
          type: "string",
        },
      ],
      name: "address",
      type: "object",
    },
  ],
  name: "footer",
  title: "Footer",
  type: "document",
};
export default footer;

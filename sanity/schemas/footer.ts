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

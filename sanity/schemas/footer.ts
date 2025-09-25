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
      name: "address",
      type: "string",
    },
  ],
  name: "footer",
  title: "Footer",
  type: "document",
};
export default footer;

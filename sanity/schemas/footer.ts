const footer = {
  name: "footer",
  type: "document",
  title: "Footer",
  fields: [
    {
      name: "navigation",
      type: "array",
      of: [{ type: "link" }],
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
};
export default footer;

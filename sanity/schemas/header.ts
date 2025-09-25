const header = {
  name: "header",
  type: "document",
  title: "Header",
  fields: [
    {
      name: "navigation",
      type: "array",
      of: [{ type: "link" }],
    },
  ],
};

export default header;

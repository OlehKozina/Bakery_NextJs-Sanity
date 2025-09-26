const header = {
  fields: [
    {
      name: "navigation",
      of: [{ type: "link" }],
      type: "array",
    },
    {
      name: "privacyPolicy",
      title: "Privacy Policy",
      to: [{ type: "privacyPolicy" }],
      type: "reference",
    },
  ],
  name: "header",
  title: "Header",
  type: "document",
};

export default header;

const joinBakery = {
  fields: [
    {
      name: "heading",
      type: "string",
    },
    {
      name: "form",
      title: "Form",
      to: [{ type: "form" }],
      type: "reference",
    },
    {
      name: "direction",
      type: "string",
    },
  ],
  name: "joinBakery",
  title: "Join Bakery",
  type: "document",
};

export default joinBakery;

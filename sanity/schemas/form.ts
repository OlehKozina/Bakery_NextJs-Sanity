const form = {
  fields: [
    {
      name: "name",
      title: "Form Name",
      type: "string",
    },
    {
      name: "fields",
      of: [
        {
          fields: [
            {
              name: "label",
              title: "Label",
              type: "string",
            },
            {
              name: "name",
              title: "Name (for input)",
              type: "string",
            },
            {
              name: "type",
              options: {
                list: ["text", "email", "textarea"], // you can expand here
              },
              title: "Type",
              type: "string",
            },
            {
              name: "required",
              title: "Required",
              type: "boolean",
            },
          ],
          name: "field",
          title: "Field",
          type: "object",
        },
      ],
      title: "Fields",
      type: "array",
    },
  ],
  name: "form",
  title: "Form",
  type: "document",
};

export default form;

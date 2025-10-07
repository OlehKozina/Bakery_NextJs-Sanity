import { defineType, defineField } from "sanity";

export default defineType({
  name: "videoSection",
  title: "Video Section",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "text",
      description: "A short description or paragraph to display near the video",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      description: "An image to display near the video",
    }),
    defineField({
      name: "video",
      title: "Video File",
      type: "file",
      options: {
        accept: "video/*",
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});

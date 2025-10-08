import { defineType, defineField } from "sanity";
import { FaVideo } from "react-icons/fa";
import { F } from "./tool";

export default defineType({
  name: "videoSection",
  type: "document",
  icon: FaVideo,

  fields: [
    F.string({
      name: "heading",
    }),
    F.text({
      name: "text",
      title: "Description",
      rows: 3,
    }),
    F.image({
      name: "image",
      hotspot: true,
    }),
    F.file({
      name: "video",
      accept: "video/*",
    }),
  ],

  preview: {
    select: {
      title: "heading",
      subtitle: "text",
      media: "image",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || "Untitled Video Section",
        subtitle: subtitle
          ? subtitle.slice(0, 50) + "..."
          : "No description yet",
        media,
      };
    },
  },
});

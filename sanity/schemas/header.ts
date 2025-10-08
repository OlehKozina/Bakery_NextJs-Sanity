import { defineType } from "sanity";
import { FaBars } from "react-icons/fa";
import { F } from "./tool";

export default defineType({
  name: "header",
  type: "document",
  title: "Header",
  icon: FaBars,

  fields: [
    F.array({
      name: "navigation",
      of: [{ type: "link" }],
      title: "Navigation Links",
    }),
    F.reference({
      name: "privacyPolicy",
      to: [{ type: "privacyPolicy" }],
    }),
  ],

  preview: {
    select: {
      navigation: "navigation",
      privacyPolicy: "privacyPolicy",
    },
    prepare({ navigation, privacyPolicy }) {
      const navCount = Array.isArray(navigation) ? navigation.length : 0;
      return {
        title: "Header",
        subtitle: `Links: ${navCount}${privacyPolicy ? ", includes Privacy Policy" : ""}`,
        media: FaBars,
      };
    },
  },
});

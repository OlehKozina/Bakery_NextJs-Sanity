import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
import { visionTool } from "@sanity/vision";

const config = defineConfig({
  projectId: "fqinbqr2",
  dataset: "production",
  title: "Bakery Website",
  apiVersion: "2024-07-17",
  basePath: "/admin",
  plugins: [deskTool(), visionTool()],
  schema: { types: schemas },
});

export default config;

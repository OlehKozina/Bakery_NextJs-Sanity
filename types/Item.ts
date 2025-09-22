import { PortableTextBlock } from "next-sanity";

export type Item = {
  _id: string;
  _createdAt: Date;
  name: string;
  image: string;
  content: PortableTextBlock[];
};

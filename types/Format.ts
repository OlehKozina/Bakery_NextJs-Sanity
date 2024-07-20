import { PortableTextBlock } from "next-sanity";

export type Format = {
  _id: string;
  _createdAt: Date;
  name: string;
  title: string;
  slug: string;
  image: string;
  content: PortableTextBlock[];
};

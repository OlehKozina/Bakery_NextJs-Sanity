import { PortableTextBlock } from "next-sanity";

export type BakersType = {
  heading?: string;
  _id?: string;
  bakers?: {
    _key?: string;
    name?: string;
    image?: string;
    content?: PortableTextBlock;
  }[];
};

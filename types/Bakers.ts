import { PortableTextBlock } from "next-sanity";

export type Bakers = {
  heading?: string;
  _id?: string;
  bakers?: {
    _key?: string;
    name?: string;
    image?: string;
    content?: PortableTextBlock;
  }[];
};

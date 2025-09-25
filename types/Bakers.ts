import { PortableTextBlock } from "next-sanity";

export type Bakers = {
  heading?: string;
  _id?: string;
  bakersList?: {
    _id?: string;
    name?: string;
    image?: string;
    content?: PortableTextBlock;
  }[];
};

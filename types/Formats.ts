import { PortableTextBlock } from "next-sanity";

export type FormatType = {
  _id: string;
  bakeryTypes: {
    image: string;
    content: PortableTextBlock[];
    name: string;
    _key?: string;
  }[];
  heading?: string;
};

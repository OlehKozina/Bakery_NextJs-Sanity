import { PortableTextBlock } from "next-sanity";

export type Format = {
  _id: string;
  bakeryTypes: {
    image: string;
    content: PortableTextBlock[];
    name: string;
    _id?: string;
  }[];
  heading?: string;
};

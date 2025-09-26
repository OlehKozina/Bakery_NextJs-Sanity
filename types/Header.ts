import { PortableTextBlock } from "next-sanity";

export type Header = {
  navigation?: {
    title?: string;
    sectionId?: string;
  }[];
  privacyPolicy?: PortableTextBlock;
  phone?: string;
  address?: {
    name?: string;
    link?: string;
  };
  email?: string;
};
